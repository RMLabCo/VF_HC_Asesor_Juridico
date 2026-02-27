import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutUs() {
    return (
        <div className="pt-0"> {/* Eliminado espacio blanco superior */}
            {/* Hero Section - About Us */}
            <section className="relative py-24 lg:py-32 bg-navy overflow-hidden animate-[fadeIn_1s_ease-out]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent-tech w-fit mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0 shadow-brutal-white">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                            Nuestra Firma
                        </span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white uppercase leading-none tracking-tighter mb-6 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
                        SOBRE <br /> <span className="text-accent-tech">NOSOTROS</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl font-medium leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
                        En HC Asesoría Jurídica, fusionamos la experiencia legal tradicional con la agilidad tecnológica de la era digital.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background-light border-b border-gray-100 group/somos animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl lg:text-5xl font-black text-navy uppercase leading-[0.9] tracking-tighter transition-transform duration-500 group-hover/somos:translate-x-1">
                                ¿Quiénes <br /> <span className="text-accent-tech group-hover/somos:brightness-125 transition-all duration-500 drop-shadow-[0_0_4px_rgba(0,195,255,0.2)] group-hover/somos:drop-shadow-[0_0_12px_rgba(0,195,255,0.5)]">Somos?</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-accent-tech mt-6 transition-all duration-500 group-hover/somos:w-32 group-hover/somos:shadow-[0_0_10px_#00C3FF]"></div>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                Somos una firma legal con sede en <span className="text-navy font-black italic">Tuluá, Valle del Cauca</span>, respaldada por una trayectoria de más de <span className="text-navy font-black">10 años</span> brindando soluciones jurídicas a entidades financieras. Liderados por la abogada especialista <span className="text-accent-tech font-bold uppercase tracking-wider">Tielen Jholenmy Cortes Ruiz</span>, nos distinguimos por combinar una gestión ética y rigurosa con resultados medibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden group/confianza animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 relative">
                            <div className="p-2 bg-white border border-gray-200 shadow-xl shadow-neutral-dark/20 rotate-[-2deg] transition-transform duration-500 group-hover/confianza:rotate-0">
                                <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative border border-gray-100">
                                    <img
                                        alt="Oficina HC"
                                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover/confianza:grayscale-0 group-hover/confianza:scale-110 contrast-110 object-top scale-[1.05]"
                                        src="/logos/Oficina_HC.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center gap-10">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-black text-navy uppercase leading-[0.9] tracking-tighter transition-transform duration-500 group-hover/confianza:translate-x-1">
                                    Estructura <br /> de <span className="text-accent-tech group-hover/confianza:brightness-125 transition-all duration-500 drop-shadow-[0_0_4px_rgba(0,195,255,0.2)] group-hover/confianza:drop-shadow-[0_0_15px_rgba(0,195,255,0.6)]">Confianza</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-accent-tech mt-6 transition-all duration-500 group-hover/confianza:w-32 group-hover/confianza:shadow-[0_0_10px_#00C3FF]"></div>
                            </div>
                            <div className="space-y-10">
                                <div className="flex gap-6 group items-start">
                                    <div className="text-5xl font-black text-accent-tech/20 group-hover:text-accent-tech/40 transition-colors">01</div>
                                    <div>
                                        <h3 className="text-sm font-black text-navy uppercase mb-2 tracking-wider">Nuestra Visión</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">Ser el aliado estratégico de referencia para las personas e instituciones financieras en el Valle del Cauca, reconocidos por nuestra capacidad única de cobertura regional en zonas complejas y por nuestra efectividad en la restitución de activos. Aspiramos a mantener los más altos estándares de calidad en la gestión de cobranza , asegurando que cada proceso jurídico se traduzca en valor retribuido para nuestros clientes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group items-start">
                                    <div className="text-5xl font-black text-accent-tech/20 group-hover:text-accent-tech/40 transition-colors">02</div>
                                    <div>
                                        <h3 className="text-sm font-black text-navy uppercase mb-2 tracking-wider">Nuestra Misión</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">Nuestra misión es transformar las necesidades legales de nuestros clientes en soluciones concretas y efectivas. Nos dedicamos a la recuperación de cartera y la gestión judicial mediante procesos optimizados que garantizan claridad, confianza y profesionalismo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-background-light border-y border-gray-100 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black text-navy uppercase mb-8">¿Tienes alguna inquietud?</h2>
                    <Link to="/agendar" className="inline-flex items-center gap-2 bg-navy text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-accent-tech transition-all hover:scale-105 group">
                        Agenda una consulta Express <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
