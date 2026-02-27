import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { ContractGenerator } from "./pages/ContractGenerator";
import { Booking } from "./pages/Booking";
import { ServiceDetail } from "./pages/ServiceDetail";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Login } from "./pages/Login";
import { CorporateDashboard } from "./pages/dashboard/CorporateDashboard";
import { AdminDashboard } from "./pages/dashboard/AdminDashboard";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/contratos" element={<ContractGenerator />} />
          <Route path="/agendar" element={<Booking />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/servicios" element={<Services />} />
        </Route>

        <Route path="/login" element={<Login />} />

        {/* Corporate Routes */}
        <Route path="/dashboard" element={<DashboardLayout role="corporate" />}>
          <Route index element={<CorporateDashboard />} />
          <Route path="contratos" element={<div className="p-10">Historial de Contratos</div>} />
          <Route path="nuevo-contrato" element={<ContractGenerator mode="corporate" />} />
          <Route path="configuracion" element={<div className="p-10">Configuración de Cuenta</div>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="contratos" element={<div className="p-10">Gestión Global de Contratos</div>} />
          <Route path="clientes" element={<div className="p-10">Gestión de Clientes</div>} />
          <Route path="configuracion" element={<div className="p-10">Configuración del Sistema</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
