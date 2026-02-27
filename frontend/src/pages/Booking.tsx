import { useState } from "react";
import { Calendar, Lock, ArrowRight, ArrowLeft, CheckCircle, Video } from "lucide-react";
import { Link } from "react-router-dom";

type Step = "select" | "time" | "payment" | "confirmation";

const APPOINTMENT_TYPES = [
    { id: "consulta_express", name: "Consulta Express Virtual (30 min)", price: 50000, desc: "Resolución rápida de dudas puntuales por videollamada." },
    { id: "asesoria_negocio", name: "Asesoría de Negocios (1 hora)", price: 120000, desc: "Análisis profundo de tu modelo de negocio y riesgos legales." },
];

const TIME_SLOTS = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export function Booking() {
    const [currentStep, setCurrentStep] = useState<Step>("select");
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const handleTypeSelect = (id: string) => {
        setSelectedType(id);
        setCurrentStep("time");
    };

    const handleTimeSelect = () => {
        if (selectedDate && selectedTime) {
            setCurrentStep("payment");
        } else {
            alert("Por favor selecciona fecha y hora");
        }
    };

    const handlePayment = () => {
        setIsProcessingPayment(true);
        setTimeout(() => {
            setIsProcessingPayment(false);
            setCurrentStep("confirmation");
        }, 2000);
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-3xl font-black text-navy uppercase mb-4">Agendar Cita</h1>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                    <span className={currentStep === "select" ? "text-accent-tech" : ""}>1. Servicio</span>
                    <span className="w-8 h-px bg-gray-300"></span>
                    <span className={currentStep === "time" ? "text-accent-tech" : ""}>2. Fecha</span>
                    <span className="w-8 h-px bg-gray-300"></span>
                    <span className={currentStep === "payment" ? "text-accent-tech" : ""}>3. Pago</span>
                    <span className="w-8 h-px bg-gray-300"></span>
                    <span className={currentStep === "confirmation" ? "text-accent-tech" : ""}>4. Confirmación</span>
                </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-xl shadow-neutral-dark/5">
                {currentStep === "select" && (
                    <div className="grid gap-4">
                        <h2 className="text-xl font-bold text-navy mb-4">Selecciona el tipo de asesoría</h2>
                        {APPOINTMENT_TYPES.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => handleTypeSelect(type.id)}
                                className="flex items-center justify-between p-6 border border-gray-200 hover:border-accent-tech hover:bg-gray-50 transition-all text-left group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-navy/5 text-navy group-hover:bg-accent-tech/10 group-hover:text-accent-tech rounded transition-colors">
                                        <Video className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-navy text-lg">{type.name}</span>
                                        <span className="text-xs text-gray-500">{type.desc}</span>
                                    </div>
                                </div>
                                <span className="font-bold text-accent-tech text-xl">
                                    ${type.price.toLocaleString()}
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {currentStep === "time" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-navy mb-4">Elige tu horario</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Fecha</label>
                                <div className="p-4 border border-gray-200 rounded">
                                    <input
                                        type="date"
                                        className="w-full border-none focus:ring-0 text-navy font-bold"
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Hora (Disponibilidad)</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {TIME_SLOTS.map(time => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`p-2 text-xs font-bold border rounded transition-colors ${selectedTime === time ? 'bg-navy text-white border-navy' : 'border-gray-200 hover:border-accent-tech text-gray-600'}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6 border-t border-gray-100 mt-6">
                            <button
                                onClick={() => setCurrentStep("select")}
                                className="flex items-center gap-2 text-gray-500 hover:text-navy font-bold text-xs uppercase tracking-widest"
                            >
                                <ArrowLeft className="w-4 h-4" /> Volver
                            </button>
                            <button
                                onClick={handleTimeSelect}
                                className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-none font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                            >
                                Continuar al Pago <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === "payment" && (
                    <div className="text-center py-8">
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-accent-tech/10 rounded-full">
                                <Lock className="w-12 h-12 text-accent-tech" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-black text-navy uppercase mb-2">Pago Seguro</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Confirma tu cita realizando el pago. Recibirás el enlace de Zoom en tu correo.
                        </p>

                        <div className="bg-gray-50 p-6 rounded mb-8 max-w-sm mx-auto border border-gray-200 text-left">
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-gray-600">Servicio:</span>
                                <span className="text-xs font-bold text-navy">{APPOINTMENT_TYPES.find(c => c.id === selectedType)?.name}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="text-xs font-bold text-gray-600">Fecha:</span>
                                <span className="text-xs font-bold text-navy">{selectedDate} - {selectedTime}</span>
                            </div>
                            <div className="flex justify-between pt-4 border-t border-gray-200 mt-4">
                                <span className="text-lg font-black text-navy">Total:</span>
                                <span className="text-lg font-black text-accent-tech">
                                    ${APPOINTMENT_TYPES.find(c => c.id === selectedType)?.price.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button
                                onClick={() => setCurrentStep("time")}
                                className="text-gray-500 hover:text-navy font-bold text-xs uppercase tracking-widest"
                            >
                                Volver
                            </button>
                            <button
                                onClick={handlePayment}
                                disabled={isProcessingPayment}
                                className="bg-accent-tech hover:bg-cyan-400 text-white px-10 py-4 rounded-none font-bold text-sm uppercase tracking-widest shadow-brutal hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isProcessingPayment ? "Procesando..." : "Pagar con Wompi"}
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === "confirmation" && (
                    <div className="text-center py-12">
                        <div className="mb-6 flex justify-center">
                            <div className="p-4 bg-green-100 rounded-full animate-bounce">
                                <CheckCircle className="w-16 h-16 text-green-600" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-navy uppercase mb-4">¡Cita Confirmada!</h2>
                        <p className="text-gray-500 mb-8 max-w-md mx-auto">
                            Hemos enviado los detalles de la videollamada a tu correo electrónico. Te esperamos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-none font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                                <Calendar className="w-4 h-4" /> Agregar a Calendario
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
