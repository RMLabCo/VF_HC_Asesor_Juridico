import { useState } from "react";
import { CheckCircle, FileText, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type Step = "select" | "details" | "payment" | "billing-confirm" | "download";

const CONTRACT_TYPES = [
    { id: "arriendo_ph", name: "Arrendamiento Propiedad Horizontal", price: 50000 },
    { id: "arriendo_noph", name: "Arrendamiento Vivienda (No PH)", price: 50000 },
    { id: "promesa_compraventa", name: "Promesa de Compraventa", price: 80000 },
    { id: "derecho_peticion", name: "Derecho de Petición", price: 30000 },
    { id: "pagare", name: "Pagaré", price: 25000 },
];

interface ContractGeneratorProps {
    mode?: "public" | "corporate";
}

export function ContractGenerator({ mode = "public" }: ContractGeneratorProps) {
    const [currentStep, setCurrentStep] = useState<Step>("select");
    const [selectedContract, setSelectedContract] = useState<string | null>(null);
    const [formData, setFormData] = useState<any>({});
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleContractSelect = (id: string) => {
        setSelectedContract(id);
        setCurrentStep("details");
    };

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data collected:", formData); // Use variable
        // Simulate form data collection
        if (mode === "corporate") {
            setCurrentStep("billing-confirm");
        } else {
            setCurrentStep("payment");
        }
    };

    const handlePayment = () => {
        setIsProcessingPayment(true);
        setTimeout(() => {
            setIsProcessingPayment(false);
            setPaymentSuccess(true);
            setCurrentStep("download");
        }, 2000); // Simulate network delay
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-3xl font-black text-navy uppercase mb-4">Generador de Documentos</h1>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                    <span className={currentStep === "select" ? "text-accent-tech" : ""}>1. Selección</span>
                    <span className="w-8 h-px bg-gray-300"></span>
                    <span className={currentStep === "details" ? "text-accent-tech" : ""}>2. Datos</span>
                    <span className="w-8 h-px bg-gray-300"></span>
                    <span className={currentStep === "payment" ? "text-accent-tech" : ""}>3. Pago</span>
                    <span className="w-8 h-px bg-gray-300"></span>
                    <span className={currentStep === "download" ? "text-accent-tech" : ""}>4. Descarga</span>
                </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-xl shadow-neutral-dark/5">
                {currentStep === "select" && (
                    <div className="grid gap-4">
                        <h2 className="text-xl font-bold text-navy mb-4">Selecciona el tipo de contrato</h2>
                        {CONTRACT_TYPES.map((contract) => (
                            <button
                                key={contract.id}
                                onClick={() => handleContractSelect(contract.id)}
                                className="flex items-center justify-between p-4 border border-gray-200 hover:border-accent-tech hover:bg-gray-50 transition-all text-left group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-navy/5 text-navy group-hover:bg-accent-tech/10 group-hover:text-accent-tech rounded transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-navy">{contract.name}</span>
                                </div>
                                <span className="font-bold text-accent-tech">
                                    ${contract.price.toLocaleString()} COP
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {currentStep === "details" && (
                    <form onSubmit={handleDetailsSubmit} className="space-y-6">
                        <h2 className="text-xl font-bold text-navy mb-4">Ingresa los detalles</h2>
                        <div className="p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs rounded mb-6">
                            <span className="font-bold">Nota:</span> Esta información se utilizará para generar tu documento legal. Verifica que esté correcta.
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Placeholder fields - these would be dynamic based on contract type */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Nombre Completo</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full border-gray-300 focus:border-accent-tech focus:ring-accent-tech rounded-none text-sm p-3"
                                    placeholder="Ej. Juan Pérez"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Identificación (CC/NIT)</label>
                                <input required type="text" className="w-full border-gray-300 focus:border-accent-tech focus:ring-accent-tech rounded-none text-sm p-3" placeholder="Ej. 123456789" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Dirección del Inmueble</label>
                                <input required type="text" className="w-full border-gray-300 focus:border-accent-tech focus:ring-accent-tech rounded-none text-sm p-3" placeholder="Dirección completa" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Canon de Arrendamiento</label>
                                <input required type="number" className="w-full border-gray-300 focus:border-accent-tech focus:ring-accent-tech rounded-none text-sm p-3" placeholder="Valor mensual" />
                            </div>
                        </div>

                        <div className="flex justify-between pt-6 border-t border-gray-100 mt-6">
                            <button
                                type="button"
                                onClick={() => setCurrentStep("select")}
                                className="flex items-center gap-2 text-gray-500 hover:text-navy font-bold text-xs uppercase tracking-widest"
                            >
                                <ArrowLeft className="w-4 h-4" /> Volver
                            </button>
                            <button
                                type="submit"
                                className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-none font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                            >
                                Continuar al Pago <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                )}

                {currentStep === "payment" && (
                    <div className="text-center py-8">
                        {/* Payment content remains same, just ensuring context */}
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-accent-tech/10 rounded-full">
                                <Lock className="w-12 h-12 text-accent-tech" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-black text-navy uppercase mb-2">Pago Seguro</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Estás a un paso de generar tu documento. Realiza el pago de forma segura a través de nuestra pasarela simulada.
                        </p>

                        <div className="bg-gray-50 p-6 rounded mb-8 max-w-sm mx-auto border border-gray-200">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold text-gray-600">Servicio:</span>
                                <span className="text-sm font-bold text-navy">{CONTRACT_TYPES.find(c => c.id === selectedContract)?.name}</span>
                            </div>
                            <div className="flex justify-between pt-4 border-t border-gray-200">
                                <span className="text-lg font-black text-navy">Total:</span>
                                <span className="text-lg font-black text-accent-tech">
                                    ${CONTRACT_TYPES.find(c => c.id === selectedContract)?.price.toLocaleString()} COP
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={() => setCurrentStep("details")}
                                className="text-gray-500 hover:text-navy font-bold text-xs uppercase tracking-widest"
                            >
                                Volver
                            </button>
                            <button
                                onClick={handlePayment}
                                disabled={isProcessingPayment}
                                className="bg-accent-tech hover:bg-cyan-400 text-white px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest shadow-brutal hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isProcessingPayment ? "Procesando..." : "Bótón wompi de prueba"}
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === "billing-confirm" && (
                    <div className="text-center py-8">
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-navy/5 rounded-full">
                                <FileText className="w-16 h-16 text-navy" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-black text-navy uppercase mb-2">Confirmar Generación</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Este contrato se cargará a tu cuenta corporativa y se facturará al final del ciclo mensual.
                        </p>

                        <div className="bg-gray-50 p-6 rounded mb-8 max-w-sm mx-auto border border-gray-200">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold text-gray-600">Servicio:</span>
                                <span className="text-sm font-bold text-navy">{CONTRACT_TYPES.find(c => c.id === selectedContract)?.name}</span>
                            </div>
                            <div className="flex justify-between pt-4 border-t border-gray-200">
                                <span className="text-lg font-black text-navy">Cargo a Cuenta:</span>
                                <span className="text-lg font-black text-accent-tech">
                                    ${CONTRACT_TYPES.find(c => c.id === selectedContract)?.price.toLocaleString()} COP
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={() => setCurrentStep("details")}
                                className="text-gray-500 hover:text-navy font-bold text-xs uppercase tracking-widest"
                            >
                                Volver
                            </button>
                            <button
                                onClick={() => {
                                    setPaymentSuccess(true); // Simulate success
                                    setCurrentStep("download");
                                }}
                                className="bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all"
                            >
                                Confirmar y Generar
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === "download" && (paymentSuccess || mode === "corporate") && (
                    <div className="text-center py-12">
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-green-100 rounded-full animate-bounce">
                                <CheckCircle className="w-16 h-16 text-green-600" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-navy uppercase mb-4">¡Documento Generado!</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Tu contrato ha sido generado y enviado a tu correo electrónico. También puedes descargarlo ahora mismo.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-none font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                                <FileText className="w-4 h-4" /> Descargar PDF
                            </button>
                            <Link to="/" className="border border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-colors">
                                Volver al Inicio
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
