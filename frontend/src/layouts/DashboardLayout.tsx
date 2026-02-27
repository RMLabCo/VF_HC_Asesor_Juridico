import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    Bell
} from "lucide-react";

export function DashboardLayout({ role }: { role: "admin" | "corporate" }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        // Clear session logic here
        navigate("/login");
    };

    const menuItems = role === "admin"
        ? [
            { icon: LayoutDashboard, label: "Panel Principal", path: "/admin" },
            { icon: FileText, label: "Gestión de Contratos", path: "/admin/contratos" },
            { icon: Users, label: "Clientes", path: "/admin/clientes" },
            { icon: Settings, label: "Configuración", path: "/admin/configuracion" },
        ]
        : [
            { icon: LayoutDashboard, label: "Mi Panel", path: "/dashboard" },
            { icon: FileText, label: "Mis Contratos", path: "/dashboard/contratos" },
            { icon: Settings, label: "Configuración", path: "/dashboard/configuracion" },
        ];

    return (
        <div className="min-h-screen bg-background-dim flex">
            {/* Sidebar Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-navy text-white transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
                    <span className="text-xl font-display font-black tracking-wider text-white">
                        HC <span className="text-accent-tech">LEGAL</span>
                    </span>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${location.pathname === item.path
                                    ? "bg-accent-tech text-navy font-bold"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon size={20} />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="text-sm font-medium">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-10">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-gray-500 hover:text-navy"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <button className="p-2 text-gray-400 hover:text-navy relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-navy">{role === 'admin' ? 'Administrador' : 'Empresa Cliente'}</p>
                                <p className="text-xs text-gray-500">{role === 'admin' ? 'Gerencia' : 'Plan Corporativo'}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold border-2 border-accent-tech">
                                {role === 'admin' ? 'AD' : 'EM'}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
