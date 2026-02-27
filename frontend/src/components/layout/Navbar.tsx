import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale, Menu, X, User } from "lucide-react";
import { clsx } from "clsx";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-navy/95 backdrop-blur-md border-gray-800 py-3"
                    : "bg-navy border-transparent py-5"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="size-10 bg-white/10 flex items-center justify-center rounded transition-transform group-hover:scale-110">
                        <img src="/logos/HC_Logo_FondoAzul_LetrasBlanca.png" alt="HC Logo" className="h-8 w-auto" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-white text-lg font-black tracking-widest uppercase leading-none">
                            HC ASESORÍA JURÍDICA
                        </h2>
                        <span className="text-[10px] text-accent-tech tracking-wider font-bold uppercase">
                            LegalTech
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-white text-xs font-bold tracking-widest uppercase hover:text-accent-tech transition-colors relative group">
                        Inicio
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-tech transition-all group-hover:w-full" />
                    </Link>
                    <Link to="/sobre-nosotros" className="text-white text-xs font-bold tracking-widest uppercase hover:text-accent-tech transition-colors relative group">
                        Sobre Nosotros
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-tech transition-all group-hover:w-full" />
                    </Link>
                    <Link to="/servicios" className="text-white text-xs font-bold tracking-widest uppercase hover:text-accent-tech transition-colors relative group">
                        Servicios
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-tech transition-all group-hover:w-full" />
                    </Link>
                    <a href="/#contacto" className="text-white text-xs font-bold tracking-widest uppercase hover:text-accent-tech transition-colors relative group">
                        Contacto
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-tech transition-all group-hover:w-full" />
                    </a>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/login"
                        className="hidden lg:flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase hover:text-accent-tech transition-colors"
                    >
                        <User className="w-4 h-4" />
                        <span>Área Cliente</span>
                    </Link>
                    <button className="bg-accent-tech hover:bg-cyan-400 text-navy px-6 py-2.5 rounded-none text-xs font-bold tracking-widest uppercase transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        Agendar Cita
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-navy border-b border-gray-800 animate-fade-in-up">
                    <nav className="flex flex-col p-6 gap-4">
                        <Link
                            to="/"
                            className="text-white text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5 hover:text-accent-tech"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/sobre-nosotros"
                            className="text-white text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5 hover:text-accent-tech"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sobre Nosotros
                        </Link>
                        <Link
                            to="/servicios"
                            className="text-white text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5 hover:text-accent-tech"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Servicios
                        </Link>
                        <a
                            href="/#contacto"
                            className="text-white text-sm font-bold tracking-widest uppercase py-2 border-b border-white/5 hover:text-accent-tech shadow-[0_4px_0_0_#00c3ff]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contacto
                        </a>
                        <Link
                            to="/login"
                            className="flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase py-2 hover:text-accent-tech"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <User className="w-4 h-4" />
                            <span>Ingresar</span>
                        </Link>
                        <button className="bg-accent-tech text-navy px-6 py-3 mt-4 rounded-none text-xs font-bold tracking-widest uppercase w-full">
                            Agendar Cita
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
