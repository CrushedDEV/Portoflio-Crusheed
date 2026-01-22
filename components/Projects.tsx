"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import ProjectGallery from "./ProjectGallery";

// BasePath para GitHub Pages (debe coincidir con next.config.ts)
const BASE_PATH = "/Portoflio-Crusheed";

// Helper para obtener la ruta correcta con basePath
const getImagePath = (path: string) => {
    // En producción (GitHub Pages), usar basePath
    if (process.env.NODE_ENV === "production") {
        return `${BASE_PATH}${path}`;
    }
    // En desarrollo local, no usar basePath
    return path;
};

export default function Projects() {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<{ title: string; images: string[] } | null>(null);

    const handleProjectClick = (project: typeof portfolioData.projects[0], e: React.MouseEvent) => {
        // Si tiene link y no es "#", no hacer nada (el link se encarga)
        if (project.link && project.link !== "#") {
            return;
        }

        // Si tiene galería, abrir modal
        if (project.gallery && project.gallery.length > 0) {
            e.preventDefault();
            setSelectedProject({ title: project.title, images: project.gallery });
            // Small delay to allow component to mount before triggering animation
            setTimeout(() => {
                setGalleryOpen(true);
            }, 10);
        }
    };
    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                    <span className="text-accent text-2xl">01.</span>
                    Proyectos Destacados
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.slice(0, 3).map((project, index) => (
                        <div
                            key={index}
                            className={`group relative apple-surface apple-card p-8 ${project.link && project.link !== "#" ? "cursor-pointer" : project.gallery && project.gallery.length > 0 ? "cursor-pointer" : ""
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
                                            loading={index === 0 ? "eager" : "lazy"}
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
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-white/70 apple-chip px-3 py-1"
                                    >
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

                {/* Botón Ver Todos */}
                <div className="mt-12 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent/90 hover:bg-accent text-white font-semibold rounded-2xl transition-all duration-300 apple-button focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                    >
                        Ver Todos los Proyectos
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Modal Gallery */}
            {selectedProject && (
                <ProjectGallery
                    isOpen={galleryOpen}
                    onClose={() => {
                        setGalleryOpen(false);
                        // Wait for animation to finish before unmounting
                        setTimeout(() => {
                            setSelectedProject(null);
                        }, 300);
                    }}
                    title={selectedProject.title}
                    images={selectedProject.images}
                />
            )}
        </section>
    );
}
