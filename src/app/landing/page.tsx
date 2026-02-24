import type { Metadata } from "next";
import { ArrowRight, Bot, BrainCircuit, CheckCircle2, Code2, DatabaseZap, LineChart, RefreshCcw, Settings, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Landing | Easy AI",
  description: "Landing page de aceleração com IA para reduzir custos e transformar processos em lucro.",
};

const ctaHref = "mailto:contato@easyai.com.br?subject=Quero%20transformar%20meu%20neg%C3%B3cio";

function CTAButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={ctaHref}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white transition-all hover:bg-blue-500 glow ${
        large ? "px-10 py-5 text-lg font-bold shadow-[0_0_30px_rgba(59,130,246,0.45)]" : "px-8 py-4 text-base font-semibold"
      }`}
    >
      Quero transformar meu negócio
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 max-w-4xl">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">{title}</h2>
      {subtitle ? <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute -top-[20%] -left-[10%] w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute top-[40%] -right-[20%] w-[60rem] h-[60rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-white">A consultoria que transforma processos em lucro.</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
              Seu negócio está <span className="text-gradient">sangrando dinheiro</span> todos os dias. E você ainda não percebeu.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl leading-relaxed">
              Existe uma torneira pingando na sua operação agora mesmo. São tarefas repetitivas, decisões lentas, processos
              manuais e oportunidades que escorrem pelo ralo enquanto sua concorrência já está fechando essa torneira com
              Inteligência Artificial.
            </p>

            <div className="max-w-4xl space-y-5 text-base md:text-lg text-slate-300 leading-relaxed mb-10">
              <p>
                Não estamos falando de tecnologia do futuro. Estamos falando de resultado agora. Empresas que implementam IA
                nos processos corretos não apenas reduzem custo, elas liberam o dinheiro que já estava lá, parado, esperando
                ser coletado.
              </p>
              <p className="font-semibold text-white">
                O problema não é que você não tem resultado para ter. O problema é que você ainda não vê onde ele está
                escondido.
              </p>
            </div>

            <CTAButton large />
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[260px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="IA não é hype. Não é diferencial. É sobrevivência." />

          <div className="max-w-4xl space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Em 2026, a pergunta não é mais: <strong>&quot;será que devo implementar IA no meu negócio?&quot;</strong>
            </p>
            <p>
              A pergunta é: <strong>&quot;Quanto eu já perdi por não ter feito isso antes?&quot;</strong>
            </p>
            <p>
              Empresas que não tiverem Inteligência Artificial estruturada nos seus processos nos próximos 12 meses não vão
              apenas crescer menos, elas vão perder para concorrentes que operam com o dobro da velocidade, metade do custo e
              zero de erro humano em atividades repetitivas.
            </p>
            <p className="font-semibold text-white">Não é previsão. É o que já está acontecendo.</p>
          </div>

          <blockquote className="mt-8 max-w-4xl glass rounded-3xl p-8 border border-white/10 text-lg text-white">
            <p>Seu concorrente não está esperando você decidir.</p>
            <p className="mt-2 font-bold">Ele já decidiu.</p>
          </blockquote>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle
            title="Cada processo ineficiente no seu negócio é uma torneira pingando."
            subtitle="Uma gota parece nada. Some as gotas de doze meses e aparece o número que vai te incomodar."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                Você sabe aquela sensação de que o negócio poderia andar mais rápido, mas sempre tem alguma coisa travando?
                Não é azar. Não é mercado. Não é falta de equipe. É torneira pingando.
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Horas do time em tarefas que IA faria em minutos.",
                  "Lead sem nutrição no tempo certo indo para concorrente.",
                  "Relatório que chega tarde quando a decisão era para ontem.",
                  "Atendimento repetitivo drenando energia da operação.",
                  "Vendas travadas por falta de follow-up e qualificação.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                Cada um desses pontos, isolado, parece pequeno. Some todos eles e você vai entender por que a conta não
                fecha do jeito que deveria.
              </p>
              <p className="mt-6 text-2xl md:text-3xl font-black leading-tight">
                O dinheiro já está no seu negócio.
                <span className="text-gradient block">Ele só está na mesa, esperando alguém pegar.</span>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle
            title="Nós não vendemos tecnologia. Nós entregamos resultado operacional."
            subtitle="Implementação real de Inteligência Artificial onde ela gera retorno de verdade, sem projeto de gaveta e sem promessa vazia."
          />

          <p className="max-w-4xl text-lg text-slate-300 leading-relaxed mb-10">
            Nossa metodologia mapeia exatamente onde o dinheiro está sendo desperdiçado na sua operação e implementa agentes
            de IA, automações e integrações cirúrgicas para fechar cada torneira.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center">
                <BrainCircuit size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Agentes Autônomos de IA</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistemas que executam tarefas complexas de forma independente: decidem, interagem com sistemas, processam
                informações e entregam resultado sem supervisão humana constante.
              </p>
              <p className="text-slate-300 mt-4 font-medium">
                Um único agente bem configurado substitui de 3 a 5 horas de trabalho repetitivo por dia.
              </p>
            </article>

            <article className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center">
                <Settings size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Automação de Processos e Integração</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integramos plataformas, automatizamos fluxos e conectamos sistemas que hoje funcionam em ilhas isoladas.
                Resultado: operação sem fricção, sem retrabalho e sem ponte manual.
              </p>
            </article>

            <article className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center">
                <DatabaseZap size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Decisão Baseada em Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estruturas de análise e relatório com IA: painéis dinâmicos, alertas automáticos e respostas rápidas para
                perguntas que hoje demoram dias.
              </p>
            </article>

            <article className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center">
                <Code2 size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Assistentes Internos com Base de Conhecimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Assistentes treinados com processos, produtos e histórico da sua empresa para resposta precisa, contextualizada
                e imediata para toda a equipe.
              </p>
            </article>

            <article className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center">
                <RefreshCcw size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CRM Inteligente e Máquina de Vendas com IA</h3>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Agente SDR para qualificar leads, fazer primeiro contato e agendar reuniões.</li>
                <li>Agente Closer para conduzir conversas e responder objeções com contexto.</li>
                <li>Nutrição automatizada para disparar a mensagem certa no momento certo.</li>
              </ul>
            </article>

            <article className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center">
                <LineChart size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Resultado Operacional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mais conversão, ciclo de venda menor e time humano focado no que realmente exige presença humana.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[240px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle
            title="Isso não é teoria. São resultados que já aconteceram."
            subtitle="Veja o que a implementação real de IA fez em uma das maiores operações de saúde do país."
          />

          <div className="glass rounded-3xl p-10 border border-white/10 mb-8">
            <h3 className="text-2xl md:text-3xl font-black mb-4">Case: Operadora de Saúde — Transformação Completa de Operação</h3>
            <p className="text-slate-300 leading-relaxed">
              Em um projeto de implementação de IA em larga escala dentro de uma operadora de saúde, desenvolvemos e
              implantamos múltiplos agentes e automações atuando de forma integrada em toda a estrutura da empresa. O resultado
              foi uma operação que antes dependia de centenas de pessoas para funcionar passando a rodar com uma fração disso,
              com mais velocidade, mais precisão e custo operacional drasticamente reduzido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="glass rounded-3xl p-7 border border-white/10">
              <h4 className="text-xl font-bold mb-3">Gestão de Licitações com IA</h4>
              <p className="text-muted-foreground leading-relaxed">
                Agente autônomo monitorando oportunidades em tempo real, cruzando rede credenciada e critérios estratégicos, e
                entregando análise estruturada antes mesmo da abertura manual dos editais.
              </p>
            </article>
            <article className="glass rounded-3xl p-7 border border-white/10">
              <h4 className="text-xl font-bold mb-3">Auditoria Médica Automatizada</h4>
              <p className="text-muted-foreground leading-relaxed">
                Classificação automática de casos de baixa e média complexidade com decisão baseada em protocolos clínicos e
                regras da ANS, mantendo especialistas focados apenas em casos complexos.
              </p>
            </article>
            <article className="glass rounded-3xl p-7 border border-white/10">
              <h4 className="text-xl font-bold mb-3">Combate a Fraudes com Verificação Massiva</h4>
              <p className="text-muted-foreground leading-relaxed">
                Estrutura de verificação contínua com cruzamento de histórico, padrões atípicos e inconsistências documentais,
                com alertas automáticos para investigação humana.
              </p>
            </article>
            <article className="glass rounded-3xl p-7 border border-white/10">
              <h4 className="text-xl font-bold mb-3">Super Agente de Atendimento</h4>
              <p className="text-muted-foreground leading-relaxed">
                Agente conectado ao sistema interno para identificar beneficiário, consultar histórico, executar transações e
                resolver o problema do cliente na mesma interação.
              </p>
            </article>
          </div>

          <blockquote className="mt-8 rounded-3xl p-8 border border-primary/25 bg-primary/10 text-white">
            No conjunto, essa implementação evitou a necessidade de mais de mil posições operacionais, substituídas por uma
            estrutura de agentes que trabalha sem parar, sem errar e sem custo de folha.
          </blockquote>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-accent/5 blur-[150px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="Quem está por trás disso já fez acontecer." />

          <div className="grid lg:grid-cols-2 gap-8">
            <article className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Filemon — Head de Tecnologia e Inovação</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Filemon foi o responsável por construir, do zero, a área de automação inteligente de uma operadora de saúde
                durante três anos como Head de Tecnologia e Inovação e arquiteto direto dos projetos descritos acima.
              </p>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Enquanto o mercado ainda debatia se IA era viável para grandes operações, ele já estava implementando em
                produção e estruturando agentes autônomos em auditoria, atendimento, licitações, combate à fraude e análise de
                dados ao mesmo tempo.
              </p>
            </article>

            <article className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">[SEU NOME] — Gestão, Processos e Crescimento Operacional</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Com trajetória à frente de empresas nos segmentos de varejo e setor pet, trouxe para a consultoria visão
                prática de gestão eficiente: criação, estruturação e acompanhamento de processos que otimizam a operação.
              </p>
              <p className="text-slate-300 mt-4 font-semibold">
                Tecnologia que funciona + gestão que sustenta o crescimento.
              </p>
            </article>
          </div>

          <blockquote className="mt-8 rounded-3xl p-8 border border-white/10 bg-white/5 text-white">
            Não somos teóricos com slides bonitos. Somos os caras que já fecharam a torneira e vieram te ensinar como fazer o
            mesmo.
          </blockquote>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="Cada mês sem IA implementada tem um custo. Ele só não aparece na sua DRE — mas está lá." />

          <div className="max-w-4xl space-y-5 text-lg text-slate-300 leading-relaxed">
            <p>
              Não existe neutralidade aqui. Você não está esperando o momento certo. Você está acumulando custo invisível de
              ineficiência, oportunidade perdida e concorrente que avança enquanto você analisa.
            </p>
            <p>A torneira não para de pingar porque você decidiu ignorar o barulho.</p>
            <p>
              A questão não é se você vai implementar IA no seu negócio. <strong>É se você vai fazer isso antes ou depois do
              seu concorrente.</strong>
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] border border-red-500/30 bg-red-500/10 p-10 max-w-4xl">
            <h3 className="text-2xl md:text-4xl font-black">Dê o primeiro passo agora.</h3>
            <p className="text-slate-200 mt-4 text-lg">Uma conversa para mapear onde está o dinheiro que você ainda não vê.</p>
            <div className="mt-7">
              <CTAButton large />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background border-b border-white/10">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="Perguntas que você provavelmente está fazendo agora:" />

          <div className="max-w-5xl space-y-4">
            <details className="glass rounded-2xl p-6 border border-white/10" open>
              <summary className="cursor-pointer text-lg md:text-xl font-bold">Meu negócio é pequeno demais para isso?</summary>
              <p className="mt-4 text-muted-foreground">
                A maioria dos clientes que transformamos pensava exatamente isso. Operações enxutas têm ainda mais a ganhar com
                IA, porque cada processo otimizado representa uma parcela maior do total.
              </p>
            </details>
            <details className="glass rounded-2xl p-6 border border-white/10">
              <summary className="cursor-pointer text-lg md:text-xl font-bold">Preciso entender de tecnologia?</summary>
              <p className="mt-4 text-muted-foreground">
                Não. Você precisa entender do seu negócio. A parte técnica é nossa. Sua parte é mostrar onde dói.
              </p>
            </details>
            <details className="glass rounded-2xl p-6 border border-white/10">
              <summary className="cursor-pointer text-lg md:text-xl font-bold">Quanto tempo leva para ver resultado?</summary>
              <p className="mt-4 text-muted-foreground">
                Depende do projeto. Alguns processos entram em produção nas primeiras semanas. O que não muda: nenhuma
                implementação sai do papel sem resultado mensurável projetado antes.
              </p>
            </details>
            <details className="glass rounded-2xl p-6 border border-white/10">
              <summary className="cursor-pointer text-lg md:text-xl font-bold">E se não funcionar para o meu setor?</summary>
              <p className="mt-4 text-muted-foreground">
                Já implementamos em saúde, varejo e setor pet. Se existe processo repetitivo, dado sendo gerado e decisão
                precisando ser tomada, existe espaço para IA trabalhar.
              </p>
            </details>
          </div>

          <div className="mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass rounded-[2rem] p-10 border border-white/10">
            <p className="text-3xl md:text-5xl font-black leading-tight">
              Seu negócio não precisa de mais tecnologia.
            </p>
            <p className="text-3xl md:text-5xl font-black leading-tight mt-2 text-gradient">
              Ele precisa da tecnologia certa, no lugar certo, com quem já sabe o que está fazendo.
            </p>
            <div className="mt-8">
              <CTAButton large />
            </div>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-secondary/20">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/80">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Seção</th>
                  <th className="px-4 py-3">Objetivo Estratégico</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/10"><td className="px-4 py-3">1</td><td className="px-4 py-3">Hero</td><td className="px-4 py-3">Capturar atenção e criar tensão imediata</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">2</td><td className="px-4 py-3">Posicionamento</td><td className="px-4 py-3">Quebrar objeção de &quot;não é pra mim agora&quot;</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">3</td><td className="px-4 py-3">Agitar Problema</td><td className="px-4 py-3">Fazer o leitor sentir o custo da inércia</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">4</td><td className="px-4 py-3">Solução</td><td className="px-4 py-3">Mostrar o que entregamos com clareza e profundidade</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">5</td><td className="px-4 py-3">Cases</td><td className="px-4 py-3">Prova social concreta e específica</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">6</td><td className="px-4 py-3">Autoridade</td><td className="px-4 py-3">Credibilidade que justifica a decisão</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">7</td><td className="px-4 py-3">Urgência</td><td className="px-4 py-3">Remover a procrastinação</td></tr>
                <tr className="border-b border-white/10"><td className="px-4 py-3">8</td><td className="px-4 py-3">FAQ</td><td className="px-4 py-3">Quebrar objeções finais</td></tr>
                <tr><td className="px-4 py-3">-</td><td className="px-4 py-3">Rodapé</td><td className="px-4 py-3">Última chance de converter</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
