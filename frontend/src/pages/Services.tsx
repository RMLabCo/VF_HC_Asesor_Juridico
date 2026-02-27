import { ArrowRight, Video, ShieldCheck, ClipboardList, Zap, Lock, Eye, FileText, Cookie, Gavel, Coins } from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
    {
        id: "contratos-linea",
        category: "Servicios Digitales",
        title: "Contratos en Línea",
        shortDesc: "Genera tus documentos legales de forma rápida y profesional.",
        icon: <Zap className="w-10 h-10" />,
        detailedDesc: "Obtén contratos técnicos y personalizados en minutos respondiendo preguntas clave sobre tus necesidades. Olvida los procesos largos; nuestro sistema redacta documentos seguros, hechos a la medida y listos para firmar para proteger tus intereses en cada transacción."
    },
    {
        id: "consultas-express",
        category: "Servicios Digitales",
        title: "Consultas Virtuales Express",
        shortDesc: "Asesoría personalizada por videollamada para dudas puntuales.",
        icon: <Video className="w-10 h-10" />,
        detailedDesc: "Accede a una sesión de 30 minutos para recibir orientación estratégica inmediata sin desplazamientos ni esperas. Es la solución ideal para aclarar conceptos y evaluar la viabilidad de tus acciones legales con un precio accesible y profesional."
    },
    {
        id: "asesoria-integral",
        category: "Servicios Digitales",
        title: "Asesoría Integral",
        shortDesc: "Solución experta para cualquier inquietud jurídica en un solo lugar.",
        icon: <ClipboardList className="w-10 h-10" />,
        detailedDesc: "Nuestro equipo analiza tu situación legal a fondo para diseñar estrategias claras que protejan tus intereses y activos. Transformamos la complejidad del mundo legal en soluciones prácticas y resultados medibles mediante un proceso transparente y colaborativo."
    },
    {
        id: "asesoria-seguros",
        category: "Servicios Digitales",
        title: "Asesoría en Seguros",
        shortDesc: "Respaldo legal para que tus pólizas realmente protejan tu patrimonio.",
        icon: <ShieldCheck className="w-10 h-10" />,
        detailedDesc: "Brindamos claridad y rigor ético en la gestión de tus pólizas, desde el análisis de condiciones hasta la gestión de reclamaciones ante aseguradoras. Estamos de tu lado para garantizar el cumplimiento de las obligaciones pendientes y asegurar la protección efectiva de tu patrimonio."
    },
    {
        id: "cumplimiento-basico",
        category: "Cumplimiento Digital",
        title: "Paquete Cumplimiento Básico",
        shortDesc: "Protege tu negocio online con documentación legal adaptada a la normativa.",
        icon: <Lock className="w-10 h-10" />,
        detailedDesc: "Brindamos las herramientas esenciales para operar tu sitio web con total transparencia y seguridad jurídica. Implementamos la documentación necesaria para evitar sanciones por incumplimiento de protección de datos y blindar tu presencia en internet."
    },
    {
        id: "aviso-privacidad",
        category: "Cumplimiento Digital",
        title: "Aviso de Privacidad",
        shortDesc: "Informa cómo recopilas, usas y proteges los datos personales.",
        icon: <Eye className="w-10 h-10" />,
        detailedDesc: "Redactamos un documento profesional que detalla con claridad la recopilación, el uso y el resguardo de la información de tus usuarios. Este servicio asegura que tu negocio informe adecuadamente sobre el tratamiento de datos personales bajo los estándares legales actuales."
    },
    {
        id: "terminos-condiciones",
        category: "Cumplimiento Digital",
        title: "Términos y Condiciones",
        shortDesc: "Reglas claras de uso que protegen tus derechos y establecen límites.",
        icon: <FileText className="w-10 h-10" />,
        detailedDesc: "Establecemos las normas de juego para tu plataforma digital, definiendo los derechos y responsabilidades de todas las partes. Estas reglas protegen tus activos y establecen límites legales claros para evitar riesgos operativos en tu actividad diaria."
    },
    {
        id: "politica-cookies",
        category: "Cumplimiento Digital",
        title: "Política de Cookies",
        shortDesc: "Información transparente sobre el uso de cookies en tu sitio web.",
        icon: <Cookie className="w-10 h-10" />,
        detailedDesc: "Proporcionamos información técnica y transparente sobre el funcionamiento de los rastreadores en tu sitio web. Garantizamos el cumplimiento de normativas internacionales, como el RGPD, para asegurar una navegación confiable para tus usuarios."
    },
    {
        id: "gestion-cobro",
        category: "Gestión de Cobro",
        title: "Gestión de Cobro",
        shortDesc: "Recuperación de cartera y retribución de valor a las entidades.",
        icon: <Coins className="w-10 h-10" />,
        detailedDesc: "Recuperación efectiva de su cartera morosa con un enfoque dual: iniciamos con gestión persuasiva y formal (Pre Jurídica) y, de ser necesario, procedemos con la acción judicial ejecutiva (Jurídica) para asegurar el pago de sus obligaciones pendientes."
    },
    {
        id: "litigio-estrategico",
        category: "Litigio Estratégico",
        title: "Litigio Estratégico",
        shortDesc: "Procesos ejecutivos y efectividad de garantía real.",
        icon: <Gavel className="w-10 h-10" />,
        detailedDesc: "Gestión Judicial Efectiva en Procesos Ejecutivos, Efectividad Garantía Real (Prenda o Hipoteca), Leasing, Renting, Factoring. Realizamos investigación primaria de los activos susceptibles de embargo."
    }
];

function ServiceCard({ title, desc, icon, id }: { title: string, desc: string, icon: React.ReactNode, id: string }) {
    return (
        <Link to={`/servicios/${id}`} className="group p-8 hover:bg-background-dim transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col items-start gap-4 h-full">
            <div className="w-10 h-1.5 bg-accent-tech mb-4 transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_12px_#00C3FF]"></div>
            <div className="text-navy group-hover:text-accent-tech transition-colors mb-2">
                {icon}
            </div>
            <h3 className="text-xl font-black text-navy uppercase mb-2 tracking-tight group-hover:text-accent-tech transition-colors leading-none">
                {title.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                ))}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed font-medium group-hover:text-gray-800 transition-colors mb-6 flex-grow">
                {desc}
            </p>
            <div className="flex items-center gap-2 text-navy text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-accent-tech transition-colors group-hover:gap-4 transition-all">
                Detalles <ArrowRight className="w-4 h-4" />
            </div>
        </Link>
    );
}

export function Services() {
    const categories = Array.from(new Set(servicesData.map(s => s.category)));

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section Refined */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden min-h-[70vh] flex items-center bg-background-light">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Background architecture"
                        className="w-full h-full object-cover"
                        src="/logos/Fondo_1.jpg"
                    />
                    <div className="absolute inset-0 bg-navy/60"></div>
                </div>

                <div className="max-w-[1200px] mx-auto w-full relative z-10">
                    <div className="grid lg:grid-cols-3 gap-0 shadow-2xl items-stretch">
                        <div className="lg:col-span-1 bg-navy p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden min-h-[400px]">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center px-4 py-1 bg-accent-tech mb-8 shadow-brutal-white">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                                        Portafolio
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
                                    SOLUCIONES <br />
                                    <span className="text-accent-tech">LEGALES</span> <br />
                                    DINÁMICAS
                                </h1>
                                <div className="w-12 h-1 bg-accent-tech mt-4"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-white p-12 lg:p-16 flex flex-col justify-center border-y border-r border-gray-100">
                            <h2 className="text-xs font-black text-navy uppercase tracking-[0.5em] mb-8 flex items-center gap-4">
                                <span className="w-12 h-1 bg-navy"></span> Nuestra Propuesta
                            </h2>
                            <p className="text-xl md:text-2xl text-navy font-semibold leading-relaxed tracking-tight max-w-2xl mb-10">
                                Combinamos la tradición legal con la agilidad tecnológica para ofrecer arquitectura jurídica de alto impacto. Sin comillas, sin cursivas, solo resultados técnicos de vanguardia.
                            </p>
                            <div className="flex flex-wrap gap-10 border-t border-gray-100 pt-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent-tech/10 flex items-center justify-center text-accent-tech">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-navy">Rapidez</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent-tech/10 flex items-center justify-center text-accent-tech">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-navy">Seguridad</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-accent-tech/10 flex items-center justify-center text-accent-tech">
                                        <Gavel className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-navy">Efectividad</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog Section - Using the pattern from "Practice Areas" */}
            <section className="py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 space-y-32">
                    {categories.map((category) => (
                        <div key={category} className="grid lg:grid-cols-3 gap-16">
                            {/* Category Title Block (Navy) */}
                            <div className="lg:col-span-1 bg-navy p-12 flex flex-col justify-center relative overflow-hidden min-h-[450px] shadow-2xl group/cat hover:-translate-y-2 transition-all duration-500 hover:shadow-cyan-900/20">
                                <div className="absolute inset-0 opacity-10 group-hover/cat:opacity-20 transition-opacity" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-black text-white leading-none uppercase tracking-tighter group-hover/cat:translate-x-2 transition-transform duration-500">
                                        {category.split(" ").map((word, i) => (
                                            <span key={i} className={i === 1 ? "text-accent-tech block" : "block"}>
                                                {word}
                                            </span>
                                        ))}
                                    </h2>
                                    <div className="mt-8 border-t border-white/10 pt-8 transform group-hover/cat:translate-y-[-4px] transition-transform duration-500">
                                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                            Soluciones innovadoras en {category.toLowerCase()} para proteger su patrimonio y asegurar sus transacciones digitales.
                                        </p>
                                        <div className="mt-8 flex items-center gap-2 text-accent-tech font-bold text-xs uppercase tracking-[0.2em]">
                                            Explorar área <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services Grid (White) */}
                            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10 py-4">
                                {servicesData
                                    .filter(s => s.category === category)
                                    .map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            id={service.id}
                                            title={service.title}
                                            desc={service.shortDesc}
                                            icon={service.icon}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Marker */}
            <section className="py-24 bg-navy relative overflow-hidden">
                <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                        ¿Resultado o <span className="text-accent-tech">Espera?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 font-medium">
                        Tu caso no requiere solo un abogado, requiere una estrategia técnica.
                    </p>
                    <Link to="/agendar" className="inline-block bg-accent-tech hover:bg-white hover:text-navy text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-brutal hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        Iniciar Consulta
                    </Link>
                </div>
            </section>
        </div>
    );
}
