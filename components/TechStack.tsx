import { portfolioData } from "@/data/portfolio";

export default function TechStack() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                    <span className="text-accent text-2xl">02.</span>
                    Tecnologías
                </h2>

                <div className="apple-surface apple-card p-8">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {portfolioData.skills.map((skill) => (
                            <div
                                key={skill}
                                className="px-6 py-3 apple-chip text-white/80 hover:text-white transition-all duration-300 font-mono text-sm cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
