import { ArrowRight, Bolt, Shield, CheckCircle, Building2, Home, Handshake, Gavel, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";
// Import local assets if replaced later, for now using URLs from HTML source for exact match of background images
// Logos will be used from assets

export function LandingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute inset-0 z-0 animate-fade-in-up">
                    <img
                        alt="Modern glass skyscrapers at dusk"
                        className="w-full h-full object-cover"
                        src="/logos/Fondo_1.jpg"
                    />
                    <div className="absolute inset-0 bg-navy/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent"></div>
                </div>

                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
                    <div className="flex flex-col gap-8 relative z-10">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent-tech w-fit shadow-brutal-white opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                                Excelencia Jurídica
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-white uppercase drop-shadow-lg opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                            TU DEPARTAMENTO <br />
                            <span className="text-accent-tech">LEGAL</span> <br />
                            DIGITAL
                        </h1>

                        <div className="border-l-4 border-white pl-6 py-2 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                            <p className="text-lg text-gray-200 max-w-md font-normal leading-relaxed drop-shadow-md">
                                Seguridad Jurídica Automatizada para Todos
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                            <Link to="/contratos" className="bg-white hover:bg-accent-tech hover:text-white text-navy px-8 py-4 rounded-none font-bold text-sm tracking-widest uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex items-center justify-center">
                                CREAR CONTRATO
                            </Link>
                            <Link to="/agendar" className="border border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-none font-bold text-sm tracking-widest uppercase transition-colors shadow-none hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center">
                                CONSULTA RÁPIDA
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contract Services Section */}
            <section className="py-24 bg-background-light border-t border-gray-100 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-left mb-16 group/contrato">
                        <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight group-hover/contrato:translate-x-1 transition-transform duration-500">
                            Elabora tu <span className="text-accent-tech group-hover/contrato:brightness-110 transition-all duration-500 drop-shadow-[0_0_4px_rgba(0,195,255,0.1)] group-hover/contrato:drop-shadow-[0_0_10px_rgba(0,195,255,0.4)] border-b-4 border-accent-tech pb-0">Contrato</span>
                        </h2>
                        <div className="mt-6 flex gap-6 text-[10px] font-bold tracking-widest uppercase text-accent-tech">
                            <span className="flex items-center gap-1"><Bolt className="w-4 h-4" /> Rápido</span>
                            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Seguro</span>
                            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Validez Legal</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <ContractCard
                            icon={<Building2 className="w-12 h-12" />}
                            title="Vivienda Conjunto Residencial"
                            desc="Propiedad horizontal y residencial."
                            delay="0.1s"
                        />
                        <ContractCard
                            icon={<Home className="w-12 h-12" />}
                            title="Vivienda"
                            desc="Locales y viviendas independientes."
                            delay="0.2s"
                        />
                        <ContractCard
                            icon={<Handshake className="w-12 h-12" />}
                            title="Promesa Compraventa"
                            desc="Asegura la transacción inmobiliaria."
                            delay="0.3s"
                        />
                        <ContractCard
                            icon={<Gavel className="w-12 h-12" />}
                            title="Derecho Petición"
                            desc="Reclamos formales ante entidades."
                            delay="0.4s"
                        />
                        <ContractCard
                            icon={<FileText className="w-12 h-12" />}
                            title="Pagaré"
                            desc="Respaldo de obligaciones dinerarias."
                            delay="0.5s"
                        />
                    </div>
                </div>
            </section>


            {/* Practice Areas Section */}
            <section className="py-32 bg-white animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1 bg-navy p-12 flex flex-col justify-center relative overflow-hidden min-h-[450px] shadow-2xl group/areas hover:-translate-y-2 transition-all duration-500 hover:shadow-cyan-900/20">
                            <div className="absolute inset-0 opacity-10 group-hover/areas:opacity-20 transition-opacity" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                            <div className="relative z-10">
                                <h2 className="text-5xl font-black text-white leading-none uppercase tracking-tighter group-hover/areas:translate-x-2 transition-transform duration-500">
                                    ÁREAS <br />DE<br /><span className="text-accent-tech group-hover/areas:brightness-125 transition-all duration-500 drop-shadow-[0_0_4px_rgba(0,195,255,0.2)] group-hover/areas:drop-shadow-[0_0_12px_rgba(0,195,255,0.6)]">PRÁCTICA</span>
                                </h2>
                                <div className="mt-8 border-t border-white/10 pt-8 transform group-hover/areas:translate-y-[-4px] transition-transform duration-500">
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                        Nuestra firma se especializa en la intersección entre la ley corporativa tradicional y las nuevas dinámicas de la economía digital.
                                    </p>
                                    <Link to="/servicios" className="inline-flex items-center gap-2 text-accent-tech font-bold text-xs uppercase mt-8 tracking-[0.2em] hover:text-white transition-all group">
                                        Explorar portafolio
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-10 py-4">
                            <PracticeCard title="Servicios Digitales" desc="Ofrecemos servicios jurídicos en línea cómo elaboración de contratos, consultas express, asesoría integral, asesoría en seguros." />
                            <PracticeCard title="Cumpimiento Digital" desc="Protección blindada de datos, términos y condiciones, y propiedad intelectual en entornos digitales." />
                            <PracticeCard title="Gestión de Cobro" desc="Gestión de cobro de cartera desde etapa prejurídica y hasta jurídico, retribuyendo valor a las empresas. Incluye activos" />
                            <PracticeCard title="Litigio Estratégico" desc="Representación táctica ante tribunales para casos complejos cómo sucesiones y divorcios. Incluye servicios notariales" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section - Infinite Scroll */}
            <section id="sobre-nosotros" className="border-y border-gray-100 bg-background-light py-20 overflow-hidden animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                <div className="max-w-[1200px] mx-auto px-6 mb-12">
                    <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Aliados Estratégicos</p>
                </div>
                <div className="flex overflow-hidden group">
                    <div className="flex animate-infinite-scroll whitespace-nowrap items-center hover:[animation-play-state:paused]">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center">
                                {/* Cada logo en un contenedor de ancho fijo para espaciado uniforme */}
                                <div className="w-56 md:w-80 flex justify-center items-center px-8">
                                    <img src="/logos/LOGO_EDIFICAR.jpg" alt="Edificar" className="h-16 md:h-20 w-auto object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="w-56 md:w-80 flex justify-center items-center px-8">
                                    <img src="/logos/LOGO_EMCI.jpeg" alt="EMCI" className="h-12 md:h-16 w-auto object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="w-56 md:w-80 flex justify-center items-center px-8">
                                    <img src="/logos/LOGO_ARQUITECTA.png" alt="Arquitecta" className="h-20 md:h-24 w-auto object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="w-56 md:w-80 flex justify-center items-center px-8">
                                    <img src="/logos/rmlab-logo.png" alt="RMLab" className="h-16 md:h-20 w-auto object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-white animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="mb-16 group/title">
                        <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight leading-none group-hover/title:translate-x-1 transition-transform duration-500">
                            EXPERIENCIA DEL <br /><span className="text-accent-tech group-hover/title:brightness-110 transition-all duration-500 drop-shadow-[0_0_4px_rgba(0,195,255,0.1)] group-hover/title:drop-shadow-[0_0_10px_rgba(0,195,255,0.4)]">CLIENTE</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-accent-tech group-hover/title:bg-accent-tech mt-6 group-hover/title:w-32 transition-all duration-500 group-hover/title:shadow-[0_0_10px_#00C3FF]"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <ReviewCard
                            name="Carlos Rodriguez"
                            company="Inmobiliaria del Valle"
                            rating={5}
                            text="Excelente servicio. La automatización de los contratos nos ha ahorrado horas de trabajo manual cada semana."
                        />
                        <ReviewCard
                            name="María Elena Gómez"
                            company="Constructora Siglo XXI"
                            rating={5}
                            text="Atención de primera. Los abogados son expertos y la plataforma es muy intuitiva para generar documentos legales."
                        />
                        <ReviewCard
                            name="Juan Pablo Duarte"
                            company="Emprendedor Independiente"
                            rating={5}
                            text="Blindaje jurídico real. Recomiendo HC Asesoría por su transparencia y efectividad en trámites complejos."
                        />
                    </div>
                </div>
            </section>

            {/* News & Opinion Section */}
            <section id="noticias" className="py-32 bg-background-dim animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 group/news">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight leading-none group-hover/news:translate-x-1 transition-transform duration-500">
                                NOTICIAS <br />& <span className="text-accent-tech group-hover/news:brightness-110 transition-all duration-500 drop-shadow-[0_0_4px_rgba(0,195,255,0.1)] group-hover/news:drop-shadow-[0_0_10px_rgba(0,195,255,0.4)]">OPINIÓN</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-accent-tech mt-6 group-hover/news:w-32 transition-all duration-500 group-hover/news:shadow-[0_0_10px_#00C3FF]"></div>
                        </div>
                        <p className="text-gray-500 text-sm max-w-md font-semibold leading-relaxed pt-2">
                            Análisis legal de vanguardia y noticias de impacto en el sector inmobiliario y comercial desde una perspectiva técnica.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <NewsCard
                            date="24 Feb 2026"
                            category="LegalTech"
                            title="El futuro de los contratos inteligentes en Colombia"
                            summary="Análisis sobre la validez judicial de las firmas digitales y la automatización documental."
                        />
                        <NewsCard
                            date="20 Feb 2026"
                            category="Opinión"
                            title="Retos de la propiedad horizontal en 2026"
                            summary="La Dra. Tielen Cortes analiza los cambios normativos y su impacto en conjuntos residenciales."
                        />
                        <NewsCard
                            date="15 Feb 2026"
                            category="Actualidad"
                            title="Nueva ley de arrendamientos: Lo que debes saber"
                            summary="Puntos clave de la reciente reforma para propietarios e inquilinos de vivienda urbana."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-navy relative overflow-hidden flex items-center justify-center min-h-[500px] animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase">
                        ¿NECESITAS <span className="text-accent-tech">RESULTADOS?</span>
                    </h2>
                    <p className="text-gray-400 text-sm mb-12 max-w-xl mx-auto font-medium">
                        Agenda una consulta express para brindarte una asesoría personalizada.
                    </p>
                    <Link to="/agendar" className="inline-block bg-accent-tech hover:bg-cyan-400 text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest transition-all shadow-brutal hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        AGENDAR CONSULTA
                    </Link>
                </div>
            </section>
        </>
    );
}

function ReviewCard({ name, text, rating, company }: { name: string, text: string, rating: number, company: string }) {
    return (
        <div className="bg-white p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-accent-tech transition-all duration-300 relative group hover:-translate-y-2">
            <div className="flex gap-1 mb-6">
                {[...Array(rating)].map((_, i) => <CheckCircle key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" />)}
            </div>
            <p className="text-gray-600 italic text-sm mb-8 leading-relaxed font-medium">"{text}"</p>
            <div className="border-t border-gray-100 pt-8">
                <p className="font-black text-navy text-xs uppercase tracking-[0.2em]">{name}</p>
                <p className="text-accent-tech text-[10px] uppercase font-bold tracking-widest mt-2">{company}</p>
            </div>
            <div className="absolute top-4 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Scale className="w-16 h-16 text-navy" />
            </div>
        </div>
    );
}

function NewsCard({ date, category, title, summary }: { date: string, category: string, title: string, summary: string }) {
    return (
        <div className="group cursor-pointer bg-white p-8 border border-gray-100 hover:border-navy transition-all duration-300 hover:shadow-2xl">
            <div className="mb-6 text-[10px] font-bold tracking-[0.3em] text-accent-tech uppercase flex items-center gap-4">
                <span className="text-navy">{date}</span>
                <span className="w-10 h-[1px] bg-gray-200"></span>
                <span>{category}</span>
            </div>
            <h3 className="text-xl font-black text-navy uppercase mb-4 leading-tight group-hover:text-accent-tech transition-colors">
                {title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-8 line-clamp-2 font-medium">
                {summary}
            </p>
            <div className="flex items-center gap-3 text-navy text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                Leer artículo <ArrowRight className="w-4 h-4 text-accent-tech" />
            </div>
        </div>
    );
}


function ContractCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: string }) {
    return (
        <div
            className="group bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-accent-tech transition-all duration-300 flex flex-col h-full shadow-neutral-dark/5 hover:shadow-neutral-dark/20 overflow-hidden relative pb-14 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: delay }}
        >
            <div className="p-6 pb-0 flex-grow">
                <div className="mb-4 text-navy group-hover:text-accent-tech transition-colors">
                    {icon}
                </div>
                <h3 className="text-sm font-black text-navy uppercase mb-2 leading-tight min-h-[40px]">{title}</h3>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">{desc}</p>
            </div>
            <Link to="/contratos" className="absolute bottom-0 left-0 w-full bg-[#0B1325] border-t-2 border-accent-tech h-12 flex items-center justify-center text-white gap-2 transition-all duration-300 group-hover:bg-accent-tech group-hover:text-[#0B1325]">
                <span className="text-xs font-bold tracking-widest uppercase">INICIAR</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}

function PracticeCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="practice-card group p-6 hover:bg-background-dim transition-colors duration-300 border border-transparent hover:border-gray-100">
            <div className="w-10 h-1.5 bg-accent-tech mb-8 transition-all duration-300 group-hover:w-20 group-hover:shadow-[0_0_12px_#00C3FF]"></div>
            <h3 className="text-xl font-black text-navy uppercase mb-4 tracking-tight group-hover:text-accent-tech transition-colors leading-none">
                {title.split(" ").map((word, i) => <span key={i} className="block">{word}</span>)}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed font-medium group-hover:text-gray-800 transition-colors">
                {desc}
            </p>
        </div>
    );
}
