"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

type StepConfig = {
  field: keyof LeadForm;
  label: string;
  type: "text" | "email" | "tel" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
  helper?: string;
};

const steps: StepConfig[] = [
  {
    field: "name",
    label: "Qual é o seu nome?",
    type: "text",
    required: true,
    placeholder: "Digite seu nome",
  },
  {
    field: "email",
    label: "Qual é o seu melhor e-mail?",
    type: "email",
    required: true,
    placeholder: "voce@empresa.com",
  },
  {
    field: "phone",
    label: "Qual é o seu telefone?",
    type: "tel",
    required: true,
    placeholder: "(11) 99999-9999",
  },
  {
    field: "company",
    label: "Qual é o nome da sua empresa?",
    type: "text",
    required: true,
    placeholder: "Nome da empresa",
  },
  {
    field: "employees",
    label: "Quantos funcionários sua empresa tem?",
    type: "select",
    required: true,
    options: employeeOptions,
  },
  {
    field: "instagram",
    label: "Qual é o @ do Instagram da empresa?",
    type: "text",
    required: false,
    placeholder: "@suaempresa",
    helper: "Opcional",
  },
];

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function FormularioPage() {
  const router = useRouter();
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);

  const handleChange = (field: keyof LeadForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldError(null);
    setMessage(null);
  };

  const validateStep = (stepIndex: number): boolean => {
    const step = steps[stepIndex];
    const value = form[step.field].trim();

    if (step.required && !value) {
      setFieldError("Preencha este campo para continuar.");
      return false;
    }

    if (step.field === "email" && value && !isValidEmail(value)) {
      setFieldError("Digite um e-mail válido.");
      return false;
    }

    setFieldError(null);
    return true;
  };

  const goToNextStep = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currentStep < steps.length - 1) {
      goToNextStep();
      return;
    }

    if (!validateStep(currentStep)) return;

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

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          method: "formulario_site",
          source: "easy_ai",
        });
      }

      setForm(initialForm);
      setCurrentStep(0);
      router.push("/obrigado");
    } catch {
      setIsError(true);
      setMessage("Erro de conexão. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeStep = steps[currentStep];
  const activeValue = form[activeStep.field];
  const progress = ((currentStep + 1) / steps.length) * 100;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute -top-[20%] -left-[10%] w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-[40%] -right-[20%] w-[60rem] h-[60rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-14 md:py-20">
        <div className="w-full max-w-3xl text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center"
            aria-label="Voltar para o site principal"
          >
            <span className="relative w-36 h-10 md:w-44 md:h-12">
              <Image
                src="/Logo_branca.png"
                alt="Easy AI"
                fill
                className="object-contain"
                priority
              />
            </span>
          </Link>

          <div className="mt-7">
            <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
              Fale com a Easy AI
            </p>
            <h1 className="mt-5 text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Vamos mapear onde seu negócio está <span className="text-gradient">perdendo dinheiro</span>.
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Preencha em etapas rápidas. Em menos de 2 minutos você conclui.
            </p>
          </div>

          <div className="mt-8 glass rounded-[2rem] p-6 md:p-8 border border-white/10">
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>Etapa {currentStep + 1} de {steps.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-black leading-tight">{activeStep.label}</h2>
                {activeStep.helper ? (
                  <p className="text-sm text-muted-foreground">{activeStep.helper}</p>
                ) : null}
              </div>

              <div className="max-w-xl mx-auto">
                {activeStep.type === "select" ? (
                  <select
                    value={activeValue}
                    onChange={(event) => handleChange(activeStep.field, event.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white text-center outline-none focus:border-primary transition-colors"
                    required={activeStep.required}
                  >
                    <option value="" disabled>
                      Selecione uma faixa
                    </option>
                    {activeStep.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={activeStep.type}
                    value={activeValue}
                    onChange={(event) => handleChange(activeStep.field, event.target.value)}
                    placeholder={activeStep.placeholder}
                    required={activeStep.required}
                    className="w-full rounded-xl border border-white/15 bg-background/70 px-4 py-3 text-white text-center outline-none focus:border-primary transition-colors"
                  />
                )}
              </div>

              {fieldError ? (
                <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200 max-w-xl mx-auto">
                  {fieldError}
                </p>
              ) : null}

              {message ? (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm max-w-xl mx-auto ${
                    isError
                      ? "border-red-500/40 bg-red-500/10 text-red-200"
                      : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                  }`}
                >
                  {message}
                </p>
              ) : null}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                  disabled={currentStep === 0 || isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-primary text-white font-bold text-base md:text-lg hover:bg-blue-500 transition-all glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : isLastStep ? "Enviar formulário" : "Continuar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
