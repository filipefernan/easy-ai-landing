import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing | Easy AI",
  description:
    "Aceleracao com IA para reduzir custos, aumentar velocidade e transformar processos em lucro.",
};

const ctaHref =
  "mailto:contato@easyai.com.br?subject=Quero%20transformar%20meu%20neg%C3%B3cio";

function PrimaryCTA({ large = false }: { large?: boolean }) {
  return (
    <a
      href={ctaHref}
      className={`inline-flex items-center justify-center rounded-full bg-red-600 font-bold text-white transition-all hover:bg-red-500 ${
        large
          ? "px-10 py-5 text-lg shadow-[0_0_40px_rgba(220,38,38,0.45)]"
          : "px-8 py-4 text-base shadow-[0_0_26px_rgba(220,38,38,0.35)]"
      }`}
    >
      Quero transformar meu negocio
    </a>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Easy AI
          </Link>
          <PrimaryCTA />
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80">
            A consultoria que transforma processos em lucro.
          </p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Seu negocio esta sangrando dinheiro todos os dias. E voce ainda nao percebeu.
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Existe uma torneira pingando na sua operacao agora mesmo. Sao tarefas repetitivas, decisoes lentas,
            processos manuais e oportunidades que escorrem pelo ralo enquanto sua concorrencia ja esta fechando essa
            torneira com Inteligencia Artificial.
          </p>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-relaxed text-white/90">
            <p>
              Nao estamos falando de tecnologia do futuro. Estamos falando de resultado agora. Empresas que implementam
              IA nos processos corretos nao apenas reduzem custo, elas liberam o dinheiro que ja estava la, parado,
              esperando ser coletado.
            </p>
            <p className="font-semibold">
              O problema nao e que voce nao tem resultado para ter. O problema e que voce ainda nao ve onde ele esta
              escondido.
            </p>
          </div>
          <div className="mt-10">
            <PrimaryCTA large />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            IA nao e hype. Nao e diferencial. E sobrevivencia.
          </h2>
          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-relaxed text-white/90">
            <p>
              Em 2026, a pergunta nao e mais: &quot;sera que devo implementar IA no meu negocio?&quot;. A pergunta e:{" "}
              <strong>&quot;quanto eu ja perdi por nao ter feito isso antes?&quot;</strong>
            </p>
            <p>
              Empresas que nao tiverem Inteligencia Artificial estruturada nos seus processos nos proximos 12 meses nao
              vao apenas crescer menos, elas vao perder para concorrentes que operam com o dobro da velocidade, metade
              do custo e zero de erro humano em atividades repetitivas.
            </p>
            <p className="font-semibold">Nao e previsao. E o que ja esta acontecendo.</p>
            <blockquote className="rounded-2xl border border-white/15 bg-white/5 p-6 text-base text-white/85">
              <p>Seu concorrente nao esta esperando voce decidir.</p>
              <p>Ele ja decidiu.</p>
            </blockquote>
          </div>
          <div className="mt-10">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Cada processo ineficiente no seu negocio e uma torneira pingando.
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-muted-foreground">
            Uma gota parece nada. Some as gotas de doze meses e aparece o numero que vai te incomodar.
          </p>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-relaxed text-white/90">
            <p>
              Voce sabe aquela sensacao de que o negocio poderia andar mais rapido, mas sempre tem alguma coisa
              travando? Nao e azar. Nao e mercado. Nao e falta de equipe. E torneira pingando.
            </p>
            <p>
              Sao as horas que seu time passa todo dia em tarefas que uma IA faria em minutos. E o lead que entrou e
              nao foi nutrido no tempo certo. E o relatorio que demora tres dias para sair quando a decisao precisava
              ser tomada ontem.
            </p>
            <p>
              E o atendente respondendo a mesma pergunta pela decima vez no dia. E a oportunidade de negocio que passou
              despercebida porque ninguem tinha tempo para analisar os dados. E o processo de vendas que trava no meio
              por falta de follow-up, qualificacao e fechamento estruturado.
            </p>
            <p className="font-semibold">
              Cada um desses pontos, isolado, parece pequeno. Some todos eles e voce vai entender por que a conta nao
              fecha do jeito que deveria.
            </p>
            <p className="font-semibold text-accent">O dinheiro ja esta no seu negocio. Ele so esta na mesa.</p>
          </div>
          <div className="mt-10">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Nos nao vendemos tecnologia. Nos entregamos resultado operacional.
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-muted-foreground">
            Implementacao real de IA onde ela gera retorno de verdade, sem projeto de gaveta e sem promessa vazia.
          </p>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-white/90">
            Nossa metodologia mapeia exatamente onde o dinheiro esta sendo desperdicado na sua operacao e implementa
            agentes de IA, automacoes e integracoes cirurgicas para fechar cada torneira.
          </p>

          <h3 className="mt-12 text-xl font-bold uppercase tracking-wider text-white/90">
            O que implementamos na sua empresa
          </h3>

          <div className="mt-8 grid gap-6">
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-2xl font-black">Agentes autonomos de IA</h4>
              <p className="mt-4 text-white/90">
                Sistemas que executam tarefas complexas de forma independente: tomam decisoes, interagem com sistemas,
                processam informacoes e entregam resultado sem supervisao humana constante.
              </p>
              <p className="mt-4 text-white/90">
                Um unico agente bem configurado substitui de 3 a 5 horas de trabalho humano repetitivo por dia.
              </p>
              <p className="mt-4 font-semibold text-accent">
                Automacao extrema: quando um cargo inteiro e ocupado por um agente de IA com zero erro humano.
              </p>
            </article>

            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-2xl font-black">Automacao de processos e integracao de sistemas</h4>
              <p className="mt-4 text-white/90">
                Integramos plataformas, automatizamos fluxos e conectamos sistemas que hoje funcionam em ilhas
                separadas. O resultado e operacao sem friccao, sem retrabalho e sem ponte manual.
              </p>
            </article>

            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-2xl font-black">Decisao baseada em dados concretos</h4>
              <p className="mt-4 text-white/90">
                Implementamos analise e relatorios com IA: paineis dinamicos, alertas automaticos, relatorios sem
                esforco humano e respostas rapidas para perguntas que hoje levam dias.
              </p>
            </article>

            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-2xl font-black">Assistentes internos com base de conhecimento</h4>
              <p className="mt-4 text-white/90">
                Criamos assistentes internos treinados com o conhecimento da sua empresa para que qualquer colaborador
                tenha resposta precisa, completa e contextualizada na hora.
              </p>
            </article>

            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-2xl font-black">CRM inteligente e maquina de vendas com IA</h4>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/90">
                <li>Agente SDR para qualificar leads, fazer primeiro contato e agendar reunioes.</li>
                <li>Agente Closer para conduzir conversas, responder objecoes e guiar ate o fechamento.</li>
                <li>Nutricao automatizada para enviar a mensagem certa no momento certo.</li>
              </ul>
              <p className="mt-4 font-semibold text-accent">
                Resultado: mais conversao, ciclo de venda menor e time humano focado no que exige presenca real.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Isso nao e teoria. Sao resultados que ja aconteceram.
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-muted-foreground">
            Veja o que a implementacao real de IA fez em uma das maiores operacoes de saude do pais.
          </p>

          <article className="mt-8 rounded-3xl border border-primary/25 bg-primary/10 p-8">
            <h3 className="text-2xl font-black">Case: operadora de saude, transformacao completa de operacao</h3>
            <p className="mt-4 text-white/90">
              Desenvolvemos e implantamos multiplos agentes e automacoes atuando de forma integrada em toda a
              estrutura da empresa. O resultado foi uma operacao que antes dependia de centenas de pessoas para
              funcionar, passando a rodar com uma fracao disso, com mais velocidade, mais precisao e custo reduzido.
            </p>
          </article>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-xl font-black">Gestao de licitacoes com IA</h4>
              <p className="mt-3 text-white/90">
                Agente autonomo assumindo o pipeline de licitacoes: monitoramento em tempo real, cruzamento com rede e
                criterios estrategicos, e pre-qualificacao antes de analise humana.
              </p>
            </article>
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-xl font-black">Auditoria medica automatizada</h4>
              <p className="mt-3 text-white/90">
                Classificacao de casos de baixa e media complexidade e decisao com base em protocolos clinicos e regras
                da ANS, deixando auditores focados em casos de alta complexidade.
              </p>
            </article>
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-xl font-black">Combate a fraudes com verificacao massiva</h4>
              <p className="mt-3 text-white/90">
                Analises continuas cruzando historico, padroes atipicos e inconsistencias documentais, com alertas para
                investigacao humana em minutos.
              </p>
            </article>
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h4 className="text-xl font-black">Super agente de atendimento</h4>
              <p className="mt-3 text-white/90">
                Agente conectado aos sistemas internos que identifica beneficiario, consulta dados e executa transacoes
                na mesma interacao, reduzindo volume humano e elevando satisfacao.
              </p>
            </article>
          </div>

          <blockquote className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6 text-lg font-semibold text-white">
            No conjunto, essa implementacao evitou a necessidade de mais de mil posicoes operacionais.
          </blockquote>

          <div className="mt-10">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Quem esta por tras disso ja fez acontecer.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h3 className="text-2xl font-black">Filemon - Head de Tecnologia e Inovacao</h3>
              <p className="mt-4 text-white/90">
                Responsavel por construir do zero a area de automacao inteligente de uma operadora de saude por tres
                anos, sendo arquiteto direto dos projetos de auditoria, atendimento, licitacoes, combate a fraude e
                analise de dados.
              </p>
              <p className="mt-4 text-white/90">
                Enquanto o mercado debatia se IA era viavel, ele ja colocava em producao uma estrutura de agentes
                autonomos que substituiu um batalhao operacional inteiro.
              </p>
            </article>
            <article className="rounded-3xl border border-white/15 bg-white/5 p-7">
              <h3 className="text-2xl font-black">[SEU NOME] - Gestao, Processos e Crescimento Operacional</h3>
              <p className="mt-4 text-white/90">
                Trajetoria a frente de empresas de varejo e setor pet, com foco em criacao, estruturacao e
                acompanhamento de processos para crescer sem virar caos.
              </p>
              <p className="mt-4 font-semibold text-accent">
                Tecnologia que funciona + gestao que sustenta o crescimento.
              </p>
            </article>
          </div>

          <blockquote className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6 text-base text-white/90">
            Nao somos teoricos com slides bonitos. Somos os caras que ja fecharam a torneira e vieram te ensinar como
            fazer o mesmo.
          </blockquote>

          <div className="mt-10">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Cada mes sem IA implementada tem um custo.
          </h2>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-relaxed text-white/90">
            <p>
              Nao existe neutralidade aqui. Voce nao esta esperando o momento certo, voce esta acumulando custo
              invisivel de ineficiencia, oportunidade perdida e concorrente avancando.
            </p>
            <p>A torneira nao para de pinga porque voce decidiu ignorar o barulho.</p>
            <p>
              A questao nao e se voce vai implementar IA no seu negocio. <strong>E se vai fazer isso antes ou depois do
              seu concorrente.</strong>
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-red-500/35 bg-red-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-200">Acao imediata</p>
            <h3 className="mt-2 text-2xl font-black md:text-3xl">De o primeiro passo agora.</h3>
            <p className="mt-3 text-white/90">
              Uma conversa para mapear onde esta o dinheiro que voce ainda nao ve.
            </p>
            <div className="mt-6">
              <PrimaryCTA large />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Perguntas que voce provavelmente esta fazendo agora
          </h2>

          <div className="mt-8 space-y-4">
            <details className="rounded-2xl border border-white/15 bg-white/5 p-6" open>
              <summary className="cursor-pointer text-lg font-bold">
                Meu negocio e pequeno demais para isso?
              </summary>
              <p className="mt-4 text-white/90">
                Operacoes enxutas tem ainda mais a ganhar com IA, porque cada processo otimizado representa uma parcela
                maior do total. Voce nao precisa ser grande para parar de desperdicar.
              </p>
            </details>
            <details className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-bold">Preciso entender de tecnologia?</summary>
              <p className="mt-4 text-white/90">
                Nao. Voce precisa entender do seu negocio. A parte tecnica e nossa.
              </p>
            </details>
            <details className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-bold">
                Quanto tempo leva para ver resultado?
              </summary>
              <p className="mt-4 text-white/90">
                Depende do projeto. Alguns processos entram em producao e geram resultado nas primeiras semanas, sempre
                com objetivo mensuravel projetado antes do inicio.
              </p>
            </details>
            <details className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-bold">
                E se nao funcionar para o meu setor?
              </summary>
              <p className="mt-4 text-white/90">
                Ja implementamos em saude, varejo e setor pet. Se existe processo repetitivo, dado sendo gerado e
                decisao precisando ser tomada, existe espaco para IA trabalhar.
              </p>
            </details>
          </div>

          <div className="mt-10">
            <PrimaryCTA />
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <p className="text-2xl font-black leading-tight md:text-4xl">
            Seu negocio nao precisa de mais tecnologia.
          </p>
          <p className="mt-2 text-2xl font-black leading-tight text-accent md:text-4xl">
            Ele precisa da tecnologia certa, no lugar certo, com quem ja sabe o que esta fazendo.
          </p>
          <div className="mt-8">
            <PrimaryCTA large />
          </div>

          <div className="mt-14 overflow-x-auto rounded-2xl border border-white/15 bg-white/5">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 text-white/80">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Secao</th>
                  <th className="px-4 py-3">Objetivo estrategico</th>
                </tr>
              </thead>
              <tbody className="text-white/90">
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Hero</td>
                  <td className="px-4 py-3">Capturar atencao e criar tensao imediata</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Posicionamento</td>
                  <td className="px-4 py-3">Quebrar objecao de nao e pra mim agora</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Agitar problema</td>
                  <td className="px-4 py-3">Fazer o leitor sentir o custo da inercia</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">Solucao</td>
                  <td className="px-4 py-3">Mostrar o que entregamos com clareza e profundidade</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">Cases</td>
                  <td className="px-4 py-3">Prova social concreta e especifica</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3">Autoridade</td>
                  <td className="px-4 py-3">Credibilidade que justifica a decisao</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">7</td>
                  <td className="px-4 py-3">Urgencia</td>
                  <td className="px-4 py-3">Remover procrastinacao</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">8</td>
                  <td className="px-4 py-3">FAQ</td>
                  <td className="px-4 py-3">Quebrar objecoes finais</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">Rodape</td>
                  <td className="px-4 py-3">Ultima chance de converter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Easy AI. Todos os direitos reservados.</p>
            <p className="mt-2">EASY LAB LTDA 64.923.328/0001-62</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
