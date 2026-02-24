"use client";

import { motion, Variants } from "framer-motion";
import { BrainCircuit, Settings, RefreshCcw, DatabaseZap, Code2, LineChart } from "lucide-react";

const services = [
    {
        icon: <BrainCircuit size={32} className="text-primary" />,
        title: "Agentes Autônomos",
        description: "3h por dia de trabalho manual que a IA faria em 10 minutos. Agentes que tomam decisões e estancam a perda de tempo da sua equipe."
    },
    {
        icon: <Settings size={32} className="text-accent" />,
        title: "Automação Extrema",
        description: "1 funcionário inteiro fazendo o que um sistema faria. Integramos suas ferramentas para fechar as torneiras de retrabalho invisível."
    },
    {
        icon: <DatabaseZap size={32} className="text-primary" />,
        title: "Modelos em Dados",
        description: "Decisões tomadas no feeling sem dados custam caro. Transformamos seus bancos de dados em insights claros para ações precisas."
    },
    {
        icon: <Code2 size={32} className="text-accent" />,
        title: "Assistentes Internos",
        description: "Atendimento lento que trava suas operações. Bots treinados na sua base de conhecimento para suporte imediato e resolutivo."
    },
    {
        icon: <RefreshCcw size={32} className="text-primary" />,
        title: "Otimização de CRM",
        description: "Leads que entram e não são nutridos é dinheiro na mesa. IA aplicada a vendas para qualificar e disparar cadências de resgate."
    },
    {
        icon: <LineChart size={32} className="text-accent" />,
        title: "Analytics Preditivo",
        description: "Campanhas rodando sem otimização inteligente queimam caixa. Previsões de demanda para você agir antes que a torneira seque."
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight"
                    >
                        Custo invisível, <span className="text-gradient">Perda real</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground"
                    >
                        O empresário normaliza a ineficiência. A torneira está pingando há meses e você nem percebeu o barulho. Veja como fechamos cada uma delas:
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative p-8 rounded-3xl bg-secondary/20 border border-white/5 backdrop-blur-sm hover:bg-secondary/40 transition-all group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner shadow-white/5">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-foreground transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
