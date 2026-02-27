import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Zap, Video, ClipboardList, ShieldCheck, Lock, Eye, FileText, Cookie, Calendar, Gavel, Coins, ArrowRight } from "lucide-react";

const SERVICES_DATA: Record<string, {
    title: string;
    category: string;
    icon: React.ReactNode;
    description: string;
    details: string;
    howItWorks: string;
    benefits: string[];
    ctaType: "agendar" | "contratos"
}> = {
    "contratos-linea": {
        title: "Contratos en Línea",
        category: "Servicios Digitales",
        icon: <Zap className="w-12 h-12 text-accent-tech" />,
        description: "Genera tus documentos legales de forma rápida y profesional.",
        details: "Obtén contratos técnicos y personalizados en minutos respondiendo preguntas clave sobre tus necesidades. Olvida los procesos largos; nuestro sistema redacta documentos seguros, hechos a la medida y listos para firmar para proteger tus intereses en cada transacción.",
        howItWorks: "Obtén contratos técnicos y personalizados en minutos respondiendo preguntas clave sobre tus necesidades. Olvida los procesos largos; nuestro sistema redacta documentos seguros, hechos a la medida y listos para firmar para proteger tus intereses en cada transacción.",
        benefits: ["Rapidez técnica", "Personalización total", "Validez jurídica inmediata"],
        ctaType: "contratos"
    },
    "consultas-express": {
        title: "Consultas Virtuales Express",
        category: "Servicios Digitales",
        icon: <Video className="w-12 h-12 text-accent-tech" />,
        description: "Asesoría personalizada por videollamada para dudas puntuales.",
        details: "Accede a una sesión de 30 minutos para recibir orientación estratégica inmediata sin desplazamientos ni esperas. Es la solución ideal para aclarar conceptos y evaluar la viabilidad de tus acciones legales con un precio accesible y profesional.",
        howItWorks: "Accede a una sesión de 30 minutos para recibir orientación estratégica inmediata sin desplazamientos ni esperas. Es la solución ideal para aclarar conceptos y evaluar la viabilidad de tus acciones legales con un precio accesible y profesional.",
        benefits: ["Sin desplazamientos", "Orientación inmediata", "Tarifa transparente"],
        ctaType: "agendar"
    },
    "asesoria-integral": {
        title: "Asesoría Integral",
        category: "Servicios Digitales",
        icon: <ClipboardList className="w-12 h-12 text-accent-tech" />,
        description: "Solución experta para cualquier inquietud jurídica en un solo lugar.",
        details: "Nuestro equipo analiza tu situación legal a fondo para diseñar estrategias claras que protejan tus intereses y activos. Transformamos la complejidad del mundo legal en soluciones prácticas y resultados medibles mediante un proceso transparente y colaborativo.",
        howItWorks: "Nuestro equipo analiza tu situación legal a fondo para diseñar estrategias claras que protejan tus intereses y activos. Transformamos la complejidad del mundo legal en soluciones prácticas y resultados medibles mediante un proceso transparente y colaborativo.",
        benefits: ["Análisis 360°", "Protección de activos", "Acompañamiento experto"],
        ctaType: "agendar"
    },
    "asesoria-seguros": {
        title: "Asesoría en Seguros",
        category: "Servicios Digitales",
        icon: <ShieldCheck className="w-12 h-12 text-accent-tech" />,
        description: "Respaldo legal para que tus pólizas realmente protejan tu patrimonio.",
        details: "Brindamos claridad y rigor ético en la gestión de tus pólizas, desde el análisis de condiciones hasta la gestión de reclamaciones ante aseguradoras. Estamos de tu lado para garantizar el cumplimiento de las obligaciones pendientes y asegurar la protección efectiva de tu patrimonio.",
        howItWorks: "Brindamos claridad y rigor ético en la gestión de tus pólizas, desde el análisis de condiciones hasta la gestión de reclamaciones ante aseguradoras. Estamos de tu lado para garantizar el cumplimiento de las obligaciones pendientes y asegurar la protección efectiva de tu patrimonio.",
        benefits: ["Defensa ante aseguradoras", "Claridad contractual", "Gestión de reclamaciones"],
        ctaType: "agendar"
    },
    "cumplimiento-basico": {
        title: "Paquete de Cumplimiento Básico",
        category: "Cumplimiento Digital",
        icon: <Lock className="w-12 h-12 text-accent-tech" />,
        description: "Protege tu negocio online con documentación legal adaptada a la normativa.",
        details: "Brindamos las herramientas esenciales para operar tu sitio web con total transparencia y seguridad jurídica. Implementamos la documentación necesaria para evitar sanciones por incumplimiento de protección de datos y blindar tu presencia en internet.",
        howItWorks: "Brindamos las herramientas esenciales para operar tu sitio web con total transparencia y seguridad jurídica. Implementamos la documentación necesaria para evitar sanciones por incumplimiento de protección de datos y blindar tu presencia en internet.",
        benefits: ["Evita sanciones", "Transparencia legal", "Blindaje web"],
        ctaType: "agendar"
    },
    "aviso-privacidad": {
        title: "Aviso de Privacidad",
        category: "Cumplimiento Digital",
        icon: <Eye className="w-12 h-12 text-accent-tech" />,
        description: "Informa cómo recopilas, usas y proteges los datos personales.",
        details: "Redactamos un documento profesional que detalla con claridad la recopilación, el uso y el resguardo de la información de tus usuarios. Este servicio asegura que tu negocio informe adecuadamente sobre el tratamiento de datos personales bajo los estándares legales actuales.",
        howItWorks: "Redactamos un documento profesional que detalla con claridad la recopilación, el uso y el resguardo de la información de tus usuarios. Este servicio asegura que tu negocio informe adecuadamente sobre el tratamiento de datos personales bajo los estándares legales actuales.",
        benefits: ["Cumplimiento Habeas Data", "Confianza del usuario", "Estándares actuales"],
        ctaType: "agendar"
    },
    "terminos-condiciones": {
        title: "Términos y Condiciones",
        category: "Cumplimiento Digital",
        icon: <FileText className="w-12 h-12 text-accent-tech" />,
        description: "Reglas claras de uso que protegen tus derechos y establecen límites.",
        details: "Establecemos las normas de juego para tu plataforma digital, definiendo los derechos y responsabilidades de todas las partes. Estas reglas protegen tus activos y establecen límites legales claros para evitar riesgos operativos en tu actividad diaria.",
        howItWorks: "Establecemos las normas de juego para tu plataforma digital, definiendo los derechos y responsabilidades de todas las partes. Estas reglas protegen tus activos y establecen límites legales claros para evitar riesgos operativos en tu actividad diaria.",
        benefits: ["Derechos protegidos", "Límites claros", "Prevención de riesgos"],
        ctaType: "agendar"
    },
    "politica-cookies": {
        title: "Política de Cookies",
        category: "Cumplimiento Digital",
        icon: <Cookie className="w-12 h-12 text-accent-tech" />,
        description: "Información transparente sobre el uso de cookies en tu sitio web.",
        details: "Proporcionamos información técnica y transparente sobre el funcionamiento de los rastreadores en tu sitio web. Garantizamos el cumplimiento de normativas internacionales, como el RGPD, para asegurar una navegación confiable para tus usuarios.",
        howItWorks: "Proporcionamos información técnica y transparente sobre el funcionamiento de los rastreadores en tu sitio web. Garantizamos el cumplimiento de normativas internacionales, como el RGPD, para asegurar una navegación confiable para tus usuarios.",
        benefits: ["Normativa internacional", "Navegación confiable", "Cumplimiento técnico"],
        ctaType: "agendar"
    },
    "gestion-cobro": {
        title: "Gestión de Cobro",
        category: "Gestión de Cartera",
        icon: <Coins className="w-12 h-12 text-accent-tech" />,
        description: "Recuperación efectiva de su cartera morosa con enfoque integral.",
        details: "Iniciamos con una gestión persuasiva y formal (Pre Jurídica) y, de ser necesario, procedemos con la acción judicial ejecutiva (Jurídica) para asegurar el pago de sus obligaciones pendientes; realizamos investigación sobre activos susceptibles de embargo.",
        howItWorks: "Iniciamos con una gestión persuasiva y formal (Pre Jurídica) y, de ser necesario, procedemos con la acción judicial ejecutiva (Jurídica) para asegurar el pago de sus obligaciones pendientes; realizamos investigación sobre activos susceptibles de embargo.",
        benefits: ["Gestión persuasiva", "Acción judicial efectiva", "Investigación de activos"],
        ctaType: "agendar"
    },
    "litigio-estrategico": {
        title: "Litigio Estratégico",
        category: "Litigio Estratégico",
        icon: <Gavel className="w-12 h-12 text-accent-tech" />,
        description: "Representación táctica y defensa de intereses complejos.",
        details: "Gestión Judicial Efectiva en Procesos Ejecutivos, Efectividad Garantía Real (Prenda o Hipoteca), Leasing, Renting, Factoring. Realizamos investigación primaria de los activos susceptibles de embargo para establecer estrategia con un avance procesal ágil.",
        howItWorks: "Gestión Judicial Efectiva en Procesos Ejecutivos, Efectividad Garantía Real (Prenda o Hipoteca), Leasing, Renting, Factoring. Realizamos investigación primaria de los activos susceptibles de embargo para establecer estrategia con un avance procesal ágil.",
        benefits: ["Avance procesal ágil", "Defensa táctica", "Estrategia de activos"],
        ctaType: "agendar"
    }
};

export function ServiceDetail() {
    const { slug } = useParams();
    const service = SERVICES_DATA[slug || ""];

    if (!service) {
        return (
            <div className="min-h-screen bg-navy flex flex-col items-center justify-center text-center p-6 text-white">
                <div className="text-accent-tech text-6xl font-black mb-8 opacity-20 select-none">404</div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Expertise no disponible</h2>
                <p className="text-gray-400 mb-12 max-w-sm">No hemos encontrado el servicio solicitado en nuestro portafolio actual.</p>
                <Link to="/servicios" className="bg-accent-tech text-white px-10 py-4 font-black uppercase tracking-widest text-xs shadow-brutal-white hover:scale-105 transition-transform">
                    Volver al Portafolio
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen selection:bg-accent-tech selection:text-navy">
            {/* Header / Nav - Minimalist Light */}
            <header className="fixed top-0 inset-x-0 z-50 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                    <Link to="/servicios" className="inline-flex items-center gap-3 text-navy hover:text-accent-tech transition-all font-black text-[10px] uppercase tracking-[0.3em] group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Volver al Portafolio
                    </Link>
                    <span className="text-accent-tech font-black text-[10px] uppercase tracking-widest hidden md:block">
                        {service.category} / Análisis Estratégico
                    </span>
                </div>
            </header>

            {/* Hero Section - Matching LandingPage Hero Style */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[50vh] flex items-center bg-navy text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Skyscraper detail"
                        className="w-full h-full object-cover opacity-20"
                        src="/logos/Fondo_1.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
                </div>

                <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col gap-10">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent-tech w-fit shadow-brutal-white opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                            Consultoría Técnica
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                        {service.title}
                    </h1>

                    <div className="border-l-4 border-white pl-6 py-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                        <p className="text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section - Simulating "Áreas de Práctica" Style */}
            <section className="py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16 items-stretch">

                        {/* Left Block: Description (Solid Navy Block Style) */}
                        <div className="lg:col-span-1 bg-navy p-12 flex flex-col justify-center relative overflow-hidden min-h-[450px] shadow-2xl group/info hover:-translate-y-2 transition-all duration-500 hover:shadow-cyan-900/20">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-accent-tech mb-8 p-3 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h2 className="text-4xl font-black text-white leading-none uppercase tracking-tighter mb-8 transition-transform duration-500">
                                    ESTRATEGIA <br /><span className="text-accent-tech">OPERATIVA</span>
                                </h2>
                                <div className="border-t border-white/10 pt-8">
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                        {service.howItWorks}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Block: Benefits (Grid Style like PracticeCards) */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-10 py-4">
                            {service.benefits.map((benefit, i) => (
                                <div key={i} className="group p-8 hover:bg-background-dim transition-colors duration-300 border border-transparent hover:border-gray-100 flex flex-col justify-between h-full bg-white">
                                    <div>
                                        <div className="w-10 h-1.5 bg-accent-tech mb-10 transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_12px_#00C3FF]"></div>
                                        <h3 className="text-xl font-black text-navy uppercase mb-4 tracking-tight group-hover:text-accent-tech transition-colors leading-none">
                                            VENTA <br />ESTRATÉGICA 0{i + 1}
                                        </h3>
                                        <p className="text-gray-500 text-xs leading-relaxed font-medium group-hover:text-gray-800 transition-colors">
                                            {benefit}
                                        </p>
                                    </div>
                                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <CheckCircle2 className="w-5 h-5 text-accent-tech" />
                                    </div>
                                </div>
                            ))}

                            {/* CTA Integrated Card */}
                            <div className="md:col-span-2 lg:col-span-2 bg-[#0a0f1a] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group/cta hover:bg-navy transition-all duration-500 shadow-xl border-b-4 border-accent-tech">
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">¿Listo para el siguiente paso?</h3>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Protocolo de asesoría técnica inmediata</p>
                                </div>
                                <Link
                                    to={service.ctaType === "contratos" ? "/contratos" : "/agendar"}
                                    className="bg-accent-tech hover:bg-white text-white hover:text-navy px-10 py-5 font-black uppercase tracking-widest text-xs transition-all shadow-brutal-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 whitespace-nowrap"
                                >
                                    {service.ctaType === "contratos" ? "Generar Contrato" : "Agendar Consulta"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Marker / Footer */}
            <footer className="py-20 bg-background-light border-t border-gray-100 text-center">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 font-black text-[10px] uppercase tracking-[0.5em]">
                        HC ASESORÍA JURÍDICA — VALLE DEL CAUCA
                    </p>
                    <div className="flex gap-10">
                        <span className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-30 italic">Ética</span>
                        <span className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-30 italic">Tecnología</span>
                        <span className="text-[10px] font-bold text-navy uppercase tracking-widest opacity-30 italic">Resultados</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
