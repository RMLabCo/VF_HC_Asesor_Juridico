import { FileText, Clock, CreditCard, Plus, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function CorporateDashboard() {
    const stats = [
        { label: "Contratos Generados", value: "12", icon: FileText, color: "text-accent-tech" },
        { label: "Corte de Facturación", value: "30 Feb", icon: Clock, color: "text-orange-500" },
        { label: "Total a Pagar (Mes)", value: "$600k", icon: CreditCard, color: "text-green-500" },
    ];

    const recentContracts = [
        { id: 101, type: "Arrendamiento Comercial", date: "19 Feb 2026", status: "Completado" },
        { id: 102, type: "Promesa Compraventa", date: "18 Feb 2026", status: "Completado" },
        { id: 103, type: "Derecho de Petición", date: "15 Feb 2026", status: "Completado" },
        { id: 104, type: "Pagaré", date: "10 Feb 2026", status: "Completado" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-black text-navy uppercase">Panel Corporativo</h1>
                    <p className="text-gray-500">Bienvenido, Empresa S.A.S.</p>
                </div>
                <Link
                    to="/dashboard/nuevo-contrato"
                    className="bg-accent-tech hover:bg-cyan-400 text-white px-6 py-3 rounded font-bold text-sm uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-accent-tech/20 transition-all"
                >
                    <Plus size={18} /> Nuevo Contrato
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 border border-gray-200 shadow-sm flex items-center gap-4">
                        <div className={`p-4 bg-gray-50 rounded-full ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
                            <p className="text-2xl font-black text-navy">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-gray-200 shadow-sm">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-navy uppercase">Historial Reciente</h2>
                    <button className="text-accent-tech text-xs font-bold uppercase hover:underline">Ver Todo</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                            <tr>
                                <th className="p-4">ID</th>
                                <th className="p-4">Tipo de Contrato</th>
                                <th className="p-4">Fecha</th>
                                <th className="p-4">Estado</th>
                                <th className="p-4 text-right">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentContracts.map((contract) => (
                                <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-mono text-gray-400">#{contract.id}</td>
                                    <td className="p-4 font-bold text-navy">{contract.type}</td>
                                    <td className="p-4 text-gray-600">{contract.date}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                                            {contract.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-navy hover:text-accent-tech transition-colors">
                                            <Download size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
