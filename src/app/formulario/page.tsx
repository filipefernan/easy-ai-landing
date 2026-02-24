"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type LeadForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  instagram: string;
};

const initialForm: LeadForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  employees: "",
  instagram: "",
};

const employeeOptions = [
  "1 a 5",
  "6 a 10",
  "11 a 25",
  "26 a 50",
  "51 a 100",
  "101 a 250",
  "251 a 500",
  "500+",
];

export default function FormularioPage() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (field: keyof LeadForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setIsError(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setIsError(true);
        setMessage(data.message ?? "Não foi possível enviar seu formulário.");
        return;
      }

      setForm(initialForm);
      setMessage("Formulário enviado com sucesso. Em breve entraremos em contato.");
    } catch {
      setIsError(true);
      setMessage("Erro de conexão. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute -top-[20%] -left-[10%] w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] w-[60rem] h-[60rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-14 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
        >
          Voltar para o site
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
            Fale com a Easy AI
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Vamos mapear onde seu negócio está <span className="text-gradient">perdendo dinheiro</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Preencha o formulário e nossa equipe entra em contato para entender seu cenário e propor um plano de implementação.
          </p>
        </div>

        <div className="mt-10 max-w-3xl glass rounded-[2rem] p-7 md:p-10 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/90">Nome *</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-white/90">E-mail *</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/90">Telefone *</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-white/90">Nome da empresa *</span>
                <input
                  type="text"
                  value={form.company}
                  onChange={(event) => handleChange("company", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/90">Quantidade de funcionários *</span>
                <select
                  value={form.employees}
                  onChange={(event) => handleChange("employees", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {employeeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-white/90">@ do Instagram (opcional)</span>
                <input
                  type="text"
                  value={form.instagram}
                  onChange={(event) => handleChange("instagram", event.target.value)}
                  placeholder="@suaempresa"
                  className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-blue-500 transition-all glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Quero transformar meu negócio"}
            </button>

            {message ? (
              <p
                className={`rounded-xl border px-4 py-3 text-sm ${
                  isError
                    ? "border-red-500/40 bg-red-500/10 text-red-200"
                    : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                }`}
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}
