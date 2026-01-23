"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import ProjectGallery from "./ProjectGallery";

// Helper para obtener la ruta correcta
const getImagePath = (path: string) => {
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

                                    {/* Persistent Type Badge */}
                                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                                        {project.link && project.link !== "#" ? (
                                            <>
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                                <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">Web</span>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,20,147,0.6)]" />
                                                <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">Galería</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <div className="p-3 bg-black/50 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group/icon relative">
                                    {project.link && project.link !== "#" ? (
                                        <>
                                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                Visitar Web
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                Ver Galería
                                            </span>
                                        </>
                                    )}
                                </div>
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
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent/90 hover:bg-accent text-white font-semibold rounded-2xl apple-button hover-smooth-float focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
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
