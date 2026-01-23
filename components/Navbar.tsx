"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Ver todos los proyectos", href: "/projects" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        if (!mobileOpen) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [mobileOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 transition-all duration-300 ${mobileOpen ? "z-40" : "z-50"} ${scrolled ? "py-4" : "py-6"}`}
        >
            <div className="container mx-auto px-6">
                <div
                    className={`flex justify-between items-center px-5 md:px-6 rounded-full transition-opacity duration-200 ${mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"} ${scrolled ? "bg-black/40 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm"}`}
                >
                    <Link href="/" className="text-xl font-bold tracking-tighter py-3">
                        Oihan<span className="text-accent">.</span>
                    </Link>

                    <ul className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="md:hidden text-white/90 py-3"
                        aria-label="Abrir menú"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMobileOpen((v) => !v)}
                        type="button"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!mobileOpen}
            >
                <button
                    type="button"
                    aria-label="Cerrar menú"
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setMobileOpen(false)}
                />

                <div className="absolute top-5 left-5 right-5">
                    <div
                        id="mobile-menu"
                        className={`bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-4 origin-top transition-transform duration-200 ${mobileOpen ? "scale-100 translate-y-0" : "scale-[0.98] -translate-y-2"}`}
                    >
                        <div className="flex items-center justify-between px-2 pb-2">
                            <span className="text-xs uppercase tracking-[0.22em] text-white/60">Menú</span>
                            <button
                                type="button"
                                className="text-white/80 px-2 py-1"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Cerrar"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ul className="flex flex-col">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center justify-between px-4 py-4 rounded-2xl text-white/90 hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-sm font-medium">{item.name}</span>
                                        <span className="text-white/35">→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
