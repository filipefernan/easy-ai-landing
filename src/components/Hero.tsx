"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Zap, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Deep Space Background Elements */}
            <div className="absolute inset-0 z-0 bg-background">
                <motion.div style={{ y: y1, opacity }} className="absolute -top-[20%] -left-[10%] w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
                <motion.div style={{ y: y2, opacity }} className="absolute top-[40%] -right-[20%] w-[60rem] h-[60rem] bg-accent/20 rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
                {/* Subtle grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-white">+3 Anos Liderando em IA</span>
                        <span className="relative flex h-2 w-2 ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-6 leading-[1.05]"
                    >
                        IA não é diferencial. <br />
                        É <span className="text-gradient inline-block pb-2">insumo básico</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
                    >
                        Para empresas que sobreviverão à próxima década. Você precisa parar de deixar dinheiro na mesa com o que já tem. Nossa Inteligência Artificial é o sistema definitivo para estancar ineficiências e recuperar o seu lucro.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Link href="/formulario" className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-blue-500 transition-all glow flex items-center justify-center gap-2 hover:gap-4 group shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                            Transformar meu negócio
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg transition-all backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Ver Cases Reais
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-14 flex items-center gap-8 text-sm text-muted-foreground font-medium"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-primary/10 border border-primary/20"><Bot className="text-primary w-4 h-4" /></div>
                            Agentes Ativos
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-accent/10 border border-accent/20"><Zap className="text-accent w-4 h-4" /></div>
                            Automação Zero-Touch
                        </div>
                    </motion.div>
                </motion.div>

                {/* Hero Visuals - Floating Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="relative hidden lg:flex justify-center items-center h-full"
                >
                    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                        {/* Outer rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
                        />
                        {/* Inner rotating ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-10 rounded-full border border-accent/20"
                        />

                        <div className="relative w-80 h-80 rounded-full glass flex flex-col justify-center items-center shadow-2xl shadow-primary/20 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-64 h-64 z-10 drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                            >
                                <Image
                                    src="/icone.png"
                                    alt="Easy AI Icon"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Floating Glass Cards */}
                        <motion.div
                            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-4 glass px-5 py-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-primary/20"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"><Bot size={24} /></div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Status do Agente</p>
                                <p className="text-base font-bold text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Ativo e Operando
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 left-0 glass px-5 py-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-accent/20"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(139,92,246,0.5)]"><TrendingUp size={24} /></div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Aumento de Eficiência</p>
                                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">+340%</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
