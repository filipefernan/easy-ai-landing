"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-0 w-1/2 h-full bg-accent/5 blur-[150px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Hacking Growth. <br />
                            Mais de <span className="text-gradient font-black text-6xl md:text-7xl block my-2">3 Anos</span>
                            Fechando Torneiras
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-2 border-primary/50 pl-6">
                            A Easy AI não nasceu ontem no boom da IA. Nós temos a experiência prática de mapear o custo invisível das suas operações, estancar perdas diárias, e transformar ineficiência em ROI real.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "Projetos validados em cenários de alta pressão corporativa",
                                "Foco em ROI (Retorno) nos primeiros 90 dias de projeto",
                                "Arquitetura de dados segura, criptografada e aderente à LGPD",
                                "Treinamento intensivo da sua equipe e aculturamento em IA"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                    <span className="font-medium text-slate-300">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6 relative">
                        {/* Center glowing orb behind cards */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none z-0" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 relative z-10 border border-white/10"
                        >
                            <h3 className="text-5xl font-black text-primary mb-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">+450</h3>
                            <p className="text-slate-400 font-medium">Processos Automatizados Extremos</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 translate-y-0 sm:translate-y-12 relative z-10 border border-white/10"
                        >
                            <h3 className="text-5xl font-black text-accent mb-3 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">99%</h3>
                            <p className="text-slate-400 font-medium">Precisão e Reliability dos Agentes</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 relative z-10 border border-white/10"
                        >
                            <h3 className="text-5xl font-black text-primary mb-3 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">30x</h3>
                            <p className="text-slate-400 font-medium">Média de ROI no 1º Ano</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="p-8 rounded-3xl glass hover:bg-white/5 transition-all duration-300 translate-y-0 sm:translate-y-12 relative z-10 border border-white/10"
                        >
                            <h3 className="text-5xl font-black text-accent mb-3 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">24/7</h3>
                            <p className="text-slate-400 font-medium">Operação Ininterrupta e Escalável</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
