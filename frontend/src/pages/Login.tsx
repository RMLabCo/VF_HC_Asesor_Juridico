import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, User, ArrowLeft, ArrowRight } from "lucide-react";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate network delay
        setTimeout(() => {
            if (email === "admin@hc.com" && password === "admin123") {
                navigate("/admin");
            } else if (email === "empresa@cliente.com" && password === "empresa123") {
                navigate("/dashboard");
            } else {
                setError("Credenciales inválidas. Intente nuevamente.");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent-tech rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md z-10">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-display font-black text-white tracking-wider mb-2">
                        HC <span className="text-accent-tech">LEGAL</span>
                    </h1>
                    <p className="text-gray-400 text-sm">Plataforma de Autogestión Jurídica</p>
                </div>

                <div className="bg-white p-8 shadow-2xl shadow-black/50">
                    <h2 className="text-2xl font-black text-navy uppercase mb-6 text-center">Iniciar Sesión</h2>

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                            <p className="text-red-700 text-sm font-bold">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Correo Electrónico</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 border-gray-300 focus:border-accent-tech focus:ring-accent-tech rounded-none text-sm p-3 bg-gray-50"
                                    placeholder="nombre@empresa.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 border-gray-300 focus:border-accent-tech focus:ring-accent-tech rounded-none text-sm p-3 bg-gray-50"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-navy hover:bg-navy/90 text-white p-4 rounded-none font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                        >
                            {isLoading ? "Validando..." : "Ingresar"}
                            {!isLoading && <ArrowRight className="w-5 h-5" />}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <Link to="/" className="text-gray-400 hover:text-navy text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> Volver al Inicio
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-center bg-white/5 p-4 rounded backdrop-blur-sm border border-white/10">
                    <p className="text-white text-xs font-bold uppercase mb-2">Credenciales de Acceso (Demo)</p>
                    <div className="grid grid-cols-2 gap-4 text-xs text-accent-tech/80">
                        <div>
                            <span className="block text-white/50">Admin:</span>
                            admin@hc.com / admin123
                        </div>
                        <div>
                            <span className="block text-white/50">Empresa:</span>
                            empresa@cliente.com / empresa123
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
