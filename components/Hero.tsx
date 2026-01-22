import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20">
            <div className="container mx-auto max-w-5xl">
                <p className="text-accent font-mono mb-4 text-lg animate-fade-up" style={{ animationDelay: "50ms" }}>
                    Hola, soy
                </p>
                <h1
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 animate-fade-up"
                    style={{ animationDelay: "140ms" }}
                >
                    {portfolioData.personal.name}
                    <span className="text-accent">.</span>
                </h1>
                <h2
                    className="text-3xl md:text-4xl text-gray-400 mb-8 font-light animate-fade-up"
                    style={{ animationDelay: "230ms" }}
                >
                    {portfolioData.personal.role}
                </h2>
                <p
                    className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10 animate-fade-up"
                    style={{ animationDelay: "320ms" }}
                >
                    {portfolioData.personal.description}
                </p>

                <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "410ms" }}>
                    <a
                        href="#projects"
                        className="px-8 py-3 border border-white/25 text-white/90 bg-white/5 hover:bg-white/10 hover:border-white/35 transition-all duration-300 font-mono apple-button"
                    >
                        Ver Proyectos
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-accent/70 text-white bg-accent/20 hover:bg-accent/30 hover:border-accent transition-all duration-300 font-mono apple-button"
                    >
                        Contactar
                    </a>
                </div>
            </div>
        </section>
    );
}
