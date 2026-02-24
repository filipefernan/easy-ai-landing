"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Serviços", href: "#services" },
        { name: "Nossa Experiência", href: "#experience" },
        { name: "Casos de Sucesso", href: "#cases" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-full border border-white/20 backdrop-blur-md shadow-2xl shadow-blue-500/20 py-4 ${scrolled ? "bg-gradient-to-r from-[#0e26dc]/90 via-[#2959f8]/90 to-[#54b6fc]/90" : "bg-gradient-to-r from-[#0e26dc]/70 via-[#2959f8]/70 to-[#54b6fc]/70"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="relative z-50 flex items-center gap-2">
                    <div className="relative w-28 h-8 md:w-36 md:h-10 mt-1">
                        <Image
                            src="/Logo_branca.png"
                            alt="Easy AI Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/formulario"
                        className="px-6 py-2.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-all glow hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Falar com Especialista
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden relative z-50 p-2 text-white"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/formulario"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-medium text-lg shadow-[0_0_30px_-5px_#0ea5e9]"
                            >
                                Começar Agora
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};
