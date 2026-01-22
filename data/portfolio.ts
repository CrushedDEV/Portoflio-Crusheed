export const portfolioData = {
    personal: {
        name: "Oihan Gomez",
        role: "Desarrollador Web Full Stack",
        location: "España",
        description: "Apasionado por crear experiencias digitales minimalistas, rápidas y accesibles, con especialización en Next.js, Laravel y diseño de interfaces limpias y eficientes.",
        email: "oihangomezaz@gmail.com",
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
    },     
    projects: [
        {
            title: "Line Nine",
            description: "Sitio web oficial del grupo de rave Line Nine, con información sobre sus eventos, música y novedades, diseñado con una interfaz moderna y responsiva.",
            tech: ["Next.js", "Tailwind CSS"],
            link: "https://crusheddev.github.io/Line-Nine/",
            image: "/projects/line-nine.png",
            imageAlt: "Previsualización de Line Nine",
        },        
        {
            title: "Dropmixr",
            description: "Plataforma colaborativa para DJs y productores: crea, comparte y descarga mashups musicales mientras conectas con otros artistas.",
            tech: ["Laravel", "React", "Inertia.js","TypeScript", "Amazon S3"],
            link: "https://dropmixr.es",
            image: "/projects/dropmixr.png",
            imageAlt: "Previsualización del Dashboard Analítico",
        },        
        {
            title: "Be Out",
            description: "Plataforma de gestión del club VRChat para organizar eventos y actividades comunitarias.",
            tech: ["Laravel", "React", "JavaScript", "MySQL"],
            link: "#",
            image: "/projects/blog.svg",
            imageAlt: "Previsualización del Blog Personal",
            gallery: [
                "/projects/blog.svg",
                "/projects/dropmixr.png",
                "/projects/line-nine.png",
                // Añade aquí más imágenes cuando las tengas: "/projects/be-out-1.png", "/projects/be-out-2.png", etc.
            ],
        }
    ],
    skills: [
        "Next.js", "React", "TypeScript", "Tailwind CSS",
        "Node.js", "Git", "MySQL", "Laravel", "Inertia.js", "AWS", "SQLite"
    ]
};
