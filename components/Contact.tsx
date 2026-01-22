"use client";

import { useState } from "react";

const EMAIL = "oihangomezaz@gmail.com";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Error al copiar:", err);
        }
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <p className="text-accent font-mono mb-4">¿Que sigue?</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ponte en Contacto</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed max-w-xl mx-auto">
                        Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré todo lo posible para responderte!
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <button
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-3 px-5 py-3 apple-chip text-white/90 hover:text-white transition-colors duration-200 font-mono text-sm cursor-pointer group border-white/12 hover:border-white/18"
                            aria-label="Copiar correo al portapapeles"
                            title="Haz click para copiar"
                            type="button"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {copied ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M8 16h8a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                )}
                            </svg>
                            <span className="select-all">{EMAIL}</span>
                            <span
                                className={`text-[11px] tracking-widest uppercase px-2 py-1 rounded-full border transition-all ${copied
                                        ? "text-white border-accent/50 bg-accent/20"
                                        : "text-white/60 border-white/10 bg-white/5 group-hover:text-white/80"
                                    }`}
                            >
                                {copied ? "Copiado" : "Copiar"}
                            </span>
                        </button>
                        <p className="text-xs text-white/50 font-mono">
                            {copied ? "¡Listo! Ya lo tienes en el portapapeles." : "Haz click para copiar el correo"}
                        </p>
                    </div>
                </div>

                <div className="apple-surface apple-card p-8 md:p-10">
                    <form 
                        method="post" 
                        action="https://simpleforms.lenorix.com/api/01kfjfyvv31bmcvr0xfqqfb446"
                        className="space-y-5"
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                required
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-300 font-sans"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-300 font-sans"
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Mensaje"
                                required
                                rows={6}
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-300 resize-none font-sans"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-accent/90 hover:bg-accent text-white font-semibold rounded-2xl transition-all duration-300 apple-button focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
