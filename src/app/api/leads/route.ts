import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  employees?: string;
  instagram?: string;
};

function normalize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    const name = normalize(payload.name);
    const email = normalize(payload.email);
    const phone = normalize(payload.phone);
    const company = normalize(payload.company);
    const employees = normalize(payload.employees);
    const instagram = normalize(payload.instagram);

    if (!name || !email || !phone || !company || !employees) {
      return NextResponse.json(
        { message: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { message: "E-mail inválido." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.LEAD_TO_EMAIL ?? user;
    const fromEmail = process.env.LEAD_FROM_EMAIL ?? user;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;

    if (!host || !user || !pass || !toEmail || !fromEmail || Number.isNaN(port)) {
      return NextResponse.json(
        { message: "Configuração de e-mail incompleta no servidor." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const createdAt = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Novo lead: ${name} (${company})`,
      text: [
        "Novo lead recebido:",
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Telefone: ${phone}`,
        `Empresa: ${company}`,
        `Quantidade de funcionários: ${employees}`,
        `Instagram: ${instagram || "Não informado"}`,
        `Data: ${createdAt}`,
      ].join("\n"),
      html: `
        <h2>Novo lead recebido</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
        <p><strong>Quantidade de funcionários:</strong> ${escapeHtml(employees)}</p>
        <p><strong>Instagram:</strong> ${escapeHtml(instagram || "Não informado")}</p>
        <p><strong>Data:</strong> ${escapeHtml(createdAt)}</p>
      `,
    });

    return NextResponse.json({ message: "Lead enviado com sucesso." });
  } catch (error) {
    console.error("Erro ao enviar lead por e-mail:", error);
    return NextResponse.json(
      { message: "Não foi possível enviar seu formulário agora. Tente novamente." },
      { status: 500 },
    );
  }
}
