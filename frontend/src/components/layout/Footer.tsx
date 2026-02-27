import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy border-t border-gray-800 pt-20 pb-10 text-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-black uppercase tracking-tight leading-none text-white">
                                HC <br />Asesoría<br />Jurídica
                            </h2>
                            <p className="text-gray-400 text-xs leading-relaxed max-w-xs text-justify">
                                Redefiniendo la práctica legal a través del diseño estructural y la ejecución digital.
                                Soluciones premium para todos los clientes.
                            </p>
                        </div>
                        <div className="flex gap-3 pt-4">
                            <SocialLink icon={<Instagram className="w-4 h-4" />} href="#" />
                            <SocialLink icon={<Linkedin className="w-4 h-4" />} href="#" />
                            <SocialLink icon={<Facebook className="w-4 h-4" />} href="#" />
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-8">
                        <h3 className="text-accent-tech font-bold text-xs uppercase tracking-widest mb-6">
                            Contacto
                        </h3>
                        <ContactItem
                            label="Ubicación"
                            value="Tuluá, Valle del Cauca"
                            icon={<MapPin className="w-3 h-3 text-accent-tech" />}
                        />
                        <ContactItem
                            label="Atención al Cliente"
                            value="+57 315 668 4149"
                            icon={<Phone className="w-3 h-3 text-accent-tech" />}
                        />
                        <ContactItem
                            label="Email"
                            value="elencortes@hcabogadoscol.com"
                            href="mailto:elencortes@hcabogadoscol.com"
                            icon={<Mail className="w-3 h-3 text-accent-tech" />}
                        />
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-accent-tech font-bold text-xs uppercase tracking-widest mb-6">
                            Newsletter
                        </h3>
                        <p className="text-gray-400 text-xs mb-6">
                            Suscríbete para recibir actualizaciones legales y novedades de la firma.
                        </p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="bg-navy border border-gray-700 rounded-none px-4 py-3 text-white text-xs focus:ring-1 focus:ring-accent-tech focus:border-accent-tech placeholder-gray-600 transition-colors bg-opacity-50"
                                placeholder="Correo Electrónico"
                                type="email"
                            />
                            <button
                                className="bg-white text-navy font-bold py-3 rounded-none hover:bg-gray-200 transition-colors text-[10px] uppercase tracking-widest w-full"
                                type="submit"
                            >
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-[10px] tracking-wider uppercase">
                        © {new Date().getFullYear()} HC Asesoría Jurídica | Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a className="text-gray-600 text-[10px] tracking-wider uppercase hover:text-white transition-colors" href="#">Privacidad</a>
                        <a className="text-gray-600 text-[10px] tracking-wider uppercase hover:text-white transition-colors" href="#">Términos</a>
                        <a className="text-gray-600 text-[10px] tracking-wider uppercase hover:text-white transition-colors" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            className="size-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-tech hover:bg-accent-tech/10 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function ContactItem({ label, value, href, icon }: { label: string; value: string; href?: string; icon: React.ReactNode }) {
    const content = (
        <div className="space-y-1 group">
            <span className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider font-bold group-hover:text-accent-tech transition-colors">
                {icon} {label}
            </span>
            <p className="text-white text-sm font-bold break-words">{value}</p>
        </div>
    );

    return href ? (
        <a href={href} className="block hover:opacity-80 transition-opacity">
            {content}
        </a>
    ) : (
        content
    );
}
