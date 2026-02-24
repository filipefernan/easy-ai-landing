import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden selection:bg-primary/30">
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute -top-[20%] -left-[10%] w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[30%] -right-[10%] w-[45rem] h-[45rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center">
          <div className="glass rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl shadow-primary/10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/30">
              <CheckCircle2 className="h-8 w-8 text-emerald-300" />
            </div>

            <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Formulário recebido
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Obrigado pelo contato.
              <span className="text-gradient block mt-2">Seu diagnóstico já começou.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Recebemos suas informações com sucesso. Se quiser acelerar seu atendimento, fale com a nossa equipe no WhatsApp
              agora.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,211,102,0.45)]"
              >
                Falar no WhatsApp agora
                <WhatsAppIcon className="h-5 w-5" />
              </a>

              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Voltar ao site
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
