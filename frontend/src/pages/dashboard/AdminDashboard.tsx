import { Users, FileText, Activity, DollarSign, Edit } from "lucide-react";

export function AdminDashboard() {
    const stats = [
        { label: "Clientes Activos", value: "145", icon: Users, color: "text-blue-500" },
        { label: "Contratos (Mes)", value: "312", icon: FileText, color: "text-accent-tech" },
        { label: "Ingresos (Mes)", value: "$6.2M", icon: DollarSign, color: "text-green-600" },
    ];

    const recentClients = [
        { id: 1, name: "Tech Solutions SAS", plan: "Corporativo", contracts: 12, lastActive: "Hace 1 hora" },
        { id: 2, name: "Inversiones Lopez", plan: "Corporativo", contracts: 5, lastActive: "Hace 3 horas" },
        { id: 3, name: "Juan Felipe Restrepo", plan: "Particular", contracts: 1, lastActive: "Hace 5 horas" },
        { id: 4, name: "Constructora El Roble", plan: "Corporativo", contracts: 28, lastActive: "Hace 1 día" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-navy uppercase">Panel Administrativo</h1>
                <p className="text-gray-500">Vista general del rendimiento de la plataforma.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 border-b-4 border-navy shadow-lg flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-3xl font-black text-navy">{stat.value}</p>
                        </div>
                        <div className={`p-3 bg-gray-50 rounded ${stat.color}`}>
                            <stat.icon size={28} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Active Clients */}
                <div className="bg-white border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-navy uppercase">Clientes Recientes</h2>
                        <Activity size={18} className="text-accent-tech" />
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {recentClients.map(client => (
                                <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 hover:border-accent-tech/30 transition-colors">
                                    <div>
                                        <p className="font-bold text-navy">{client.name}</p>
                                        <p className="text-xs text-gray-500">{client.plan} • {client.contracts} contratos</p>
                                    </div>
                                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                        {client.lastActive}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Templates Mock */}
                <div className="bg-navy p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-tech rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>

                    <h2 className="text-xl font-bold uppercase mb-6 relative z-10">Gestión de Plantillas</h2>
                    <p className="text-gray-400 mb-8 relative z-10">Administra los documentos maestros que utilizan tus clientes.</p>

                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded backdrop-blur-sm border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">
                            <span className="font-bold text-sm">Contrato Arrendamiento V.1.2</span>
                            <Edit size={16} className="text-accent-tech" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded backdrop-blur-sm border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">
                            <span className="font-bold text-sm">Promesa Compraventa V.2.0</span>
                            <Edit size={16} className="text-accent-tech" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded backdrop-blur-sm border border-white/5 hover:bg-white/20 cursor-pointer transition-colors">
                            <span className="font-bold text-sm">Pagaré General V.1.0</span>
                            <Edit size={16} className="text-accent-tech" />
                        </div>
                    </div>

                    <button className="mt-8 w-full bg-accent-tech hover:bg-white hover:text-navy text-navy font-bold py-3 uppercase tracking-widest transition-colors">
                        Ir al Editor Maestro
                    </button>
                </div>
            </div>
        </div>
    );
}
