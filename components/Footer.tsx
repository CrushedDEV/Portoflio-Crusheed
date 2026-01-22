export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-10 text-center text-white/55 text-sm font-mono border-t border-white/10">
            <p>
                Diseñado & Construido por <span className="text-white">Oihan Gomez</span>
            </p>
            <div className="mt-2">
                <span className="mx-2">Next.js</span>•
                <span className="mx-2">Tailwind CSS</span>•
                <span className="mx-2">{year}</span>
            </div>
        </footer>
    );
}
