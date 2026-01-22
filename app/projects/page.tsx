"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import ProjectGallery from "@/components/ProjectGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// BasePath para GitHub Pages
const getImagePath = (path: string) => {
    return path;
};

export default function AllProjectsPage() {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<{ title: string; images: string[] } | null>(null);

    const handleProjectClick = (project: typeof portfolioData.projects[0], e: React.MouseEvent) => {
        if (project.link && project.link !== "#") {
            return;
        }

        if (project.gallery && project.gallery.length > 0) {
            e.preventDefault();
            setSelectedProject({ title: project.title, images: project.gallery });
            setGalleryOpen(true);
        }
    };

    return (
        <main className="min-h-screen text-white selection:bg-accent selection:text-white relative">
            <Navbar />

            <section className="py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver al inicio
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Todos los Proyectos</h1>
                        <p className="text-gray-400 text-lg">Explora todos mis proyectos y trabajos realizados.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <div
                                key={index}
                                className={`group relative apple-surface apple-card p-8 ${project.link && project.link !== "#"
                                        ? "cursor-pointer"
                                        : project.gallery && project.gallery.length > 0
                                            ? "cursor-pointer"
                                            : ""
                                    }`}
                                onClick={(e) => handleProjectClick(project, e)}
                            >
                                <div className="mb-6">
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 aspect-[16/10]">
                                        {project.image ? (
                                            <img
                                                src={getImagePath(project.image)}
                                                alt={project.imageAlt ?? `Previsualización de ${project.title}`}
                                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 grid place-items-center text-white/40 font-mono text-sm">
                                                Sin preview
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {project.link && project.link !== "#" ? (
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    ) : project.gallery && project.gallery.length > 0 ? (
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    ) : null}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-white/70 apple-chip px-3 py-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link && project.link !== "#" ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="absolute inset-0 rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                                        aria-label={`Abrir proyecto ${project.title}`}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            {/* Modal Gallery */}
            {selectedProject && (
                <ProjectGallery
                    isOpen={galleryOpen}
                    onClose={() => {
                        setGalleryOpen(false);
                        setSelectedProject(null);
                    }}
                    title={selectedProject.title}
                    images={selectedProject.images}
                />
            )}
        </main>
    );
}
