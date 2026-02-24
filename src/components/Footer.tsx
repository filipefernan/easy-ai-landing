"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const CTA = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for back glows
    const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} id="contact" className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-5xl p-12 md:p-24 rounded-[3rem] glass relative overflow-hidden text-center shadow-2xl shadow-primary/10 border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        >
                            <Sparkles className="w-4 h-4" />
                            O Futuro Chegou
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight">
                            Pronto para fechar as <span className="text-gradient">torneiras</span> hoje?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                            Qual é o custo de não usar IA no seu negócio? Você acha que é zero, mas a torneira de ineficiências está pingando há meses. Agende uma consultoria para mapearmos exatamente onde você está perdendo dinheiro.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/formulario" className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3 w-full sm:w-auto group shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
                                Agendar Consultoria Gratuita
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-background pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="relative w-48 h-14 mb-8">
                            <Image src="/brand/logo_light.png" alt="Easy AI Logo" fill className="object-contain object-left" />
                        </div>
                        <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mix-blend-screen">
                            Implementação de Inteligência Artificial e Automação para empresas que buscam alta performance, escala e dominação de mercado.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 text-xl">Soluções</h4>
                        <ul className="space-y-5 text-muted-foreground font-medium">
                            <li><Link href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary/50" /> Agentes Autônomos</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary/50" /> Automação Extrema</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary/50" /> IA para Dados</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary/50" /> Otimização de CRM</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 text-xl">Contato</h4>
                        <ul className="space-y-5 text-muted-foreground font-medium">
                            <li><a href="mailto:contato@easyai.com.br" className="hover:text-accent transition-colors">contato@easyai.com.br</a></li>
                            <li>São Paulo, SP - Brasil</li>
                            <li className="pt-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer text-white shadow-lg">In</div>
                                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer text-white shadow-lg">Ig</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground font-medium">
                    <div className="text-center md:text-left">
                        <p>© {new Date().getFullYear()} Easy AI. Todos os direitos reservados.</p>
                        <p className="mt-2 text-xs">EASY LAB LTDA 64.923.328/0001-62</p>
                    </div>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-white transition-colors">Termos Gerais</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
