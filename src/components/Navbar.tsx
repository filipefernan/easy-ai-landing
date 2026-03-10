"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

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

    const shellClasses = scrolled
        ? "bg-[linear-gradient(180deg,rgba(39,73,238,0.96)_0%,rgba(24,45,197,0.96)_100%)] shadow-blue-500/20"
        : "bg-[linear-gradient(180deg,rgba(39,73,238,0.88)_0%,rgba(24,45,197,0.88)_100%)] shadow-blue-500/15";

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[90%] max-w-7xl z-50 transition-all duration-300 py-4"
        >
            <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-full border border-white/20 backdrop-blur-md shadow-2xl ${shellClasses}`}>
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(111,196,255,0.18)_0%,rgba(111,196,255,0.06)_34%,transparent_72%)]" />
                <div className="absolute inset-x-8 top-0 h-px bg-white/30" />
            </div>

            <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="relative z-50 flex items-center gap-2">
                    <div className="relative w-28 h-8 sm:w-32 sm:h-9 lg:w-36 lg:h-10 mt-1">
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
                <nav className="hidden lg:flex items-center gap-8">
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
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-slate-100 transition-all glow hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-flex items-center gap-2"
                    >
                        Falar com Especialista
                        <WhatsAppIcon className="w-4 h-4" />
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden relative z-50 p-2 text-white"
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
                            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] z-40 rounded-[2rem] border border-white/10 bg-background/95 px-8 py-10 backdrop-blur-xl shadow-2xl shadow-blue-500/10 lg:hidden"
                        >
                            <div className="flex flex-col items-center gap-7">
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
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-2 px-8 py-3 rounded-full bg-primary text-white font-medium text-lg shadow-[0_0_30px_-5px_#0ea5e9] inline-flex items-center gap-2"
                                >
                                    Falar com Especialista
                                    <WhatsAppIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};
