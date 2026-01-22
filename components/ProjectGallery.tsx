"use client";

import { useState, useEffect } from "react";

interface ProjectGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    images: string[];
}

const getImagePath = (path: string) => {
    return path;
};

export default function ProjectGallery({ isOpen, onClose, title, images }: ProjectGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
            } else if (e.key === "ArrowRight") {
                setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, images.length, onClose]);

    if (images.length === 0) return null;

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={onClose}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
                className={`relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors z-20"
                    aria-label="Cerrar galería"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">{title}</h2>

                {/* Image Container */}
                <div className="relative w-full max-w-6xl h-[55vh] md:h-[60vh] flex items-center justify-center my-4">
                    {/* Previous Button */}
                    {images.length > 1 && (
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-20 bg-black/50 backdrop-blur-sm rounded-full p-3"
                            aria-label="Imagen anterior"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Current Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={getImagePath(images[currentIndex])}
                            alt={`${title} - Imagen ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>

                    {/* Next Button */}
                    {images.length > 1 && (
                        <button
                            onClick={goToNext}
                            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-20 bg-black/50 backdrop-blur-sm rounded-full p-3"
                            aria-label="Imagen siguiente"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                    <div className="mt-8 flex gap-2 overflow-x-auto max-w-6xl px-4 pb-2 z-20">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                                    ? "border-accent scale-110"
                                    : "border-white/20 hover:border-white/40"
                                    }`}
                            >
                                <img
                                    src={getImagePath(img)}
                                    alt={`Miniatura ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                )}

                {/* Counter */}
                {images.length > 1 && (
                    <div className="mt-4 text-white/60 text-sm font-mono">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}
            </div>
        </div>
    );
}
