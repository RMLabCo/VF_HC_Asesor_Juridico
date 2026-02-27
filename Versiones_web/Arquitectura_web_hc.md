ARCHITECTURE.md - Definición Técnica y Estándares de Código (HC Plataforma)
1. Stack Tecnológico Base
El proyecto sigue una arquitectura Serverless orientada a eventos. Todas las decisiones de código deben alinearse con este stack:

Frontend: React.js con TypeScript (inicializado vía Vite).

Estilos: Tailwind CSS (basado en los Design Tokens definidos en el README).

BaaS (Backend as a Service): Firebase (SDK Modular v10+).

Infraestructura Cloud: Google Cloud Platform (GCP) - Proyecto: hc-asesoria-platform.

Motor Backend (Microservicios): Firebase Cloud Functions (Node.js Gen 2).

Base de Datos: Cloud Firestore (Modo Nativo).

Pasarela de Pagos: Wompi (Integración vía Webhook y Widget Frontend).

IA y Chatbot: Genkit conectado a modelos Vertex AI (Gemini 1.5 Flash).

2. Topología y Configuración de Firebase
El agente debe utilizar las siguientes convenciones al interactuar con el Firebase MCP o al escribir código de conexión:

Región Principal: us-central1 (Tanto para Firestore como para Cloud Functions).

Base de Datos: Instancia (default).

Autenticación: Firebase Auth configurado exclusivamente con Email/AuthProvider.

3. Modelado de Datos (Cloud Firestore)
La base de datos es NoSQL. Las colecciones principales que debes asumir y gestionar en el código son:

Colección usuarios (Creada vía trigger al registrarse en Auth):

TypeScript
interface Usuario {
  uid: string; // Coincide con Auth UID
  email: string;
  nombre_completo: string;
  rol: 'cliente' | 'admin' | 'colaborador';
  fecha_registro: Timestamp;
  contratos_habilitados: string[]; // IDs de contratos que el admin le permite ver
}
Colección servicios (Catálogo de productos/contratos disponibles):

TypeScript
interface Servicio {
  id: string; // ej: 'derecho_peticion', 'arriendo_ph'
  nombre: string;
  precio: number;
  categoria: 'recuperacion_dinero' | 'contratos' | 'familia' | 'empresas';
  activo: boolean;
}
Colección documentos_generados (El historial del cliente):

TypeScript
interface DocumentoGenerado {
  id: string;
  usuarioId: string; // Referencia a usuarios
  servicioId: string; // Referencia a servicios
  estado: 'borrador' | 'pagado' | 'finalizado';
  datos_formulario: Record<string, any>; // JSON con las respuestas del cliente
  url_pdf?: string; // URL del Storage una vez generado
  fecha_creacion: Timestamp;
}
4. Arquitectura de Backend (Cloud Functions)
El código del backend debe residir en una carpeta /functions. Los microservicios principales a desarrollar progresivamente son:

onUserCreate: Trigger de Auth para crear el documento en la colección usuarios con rol cliente por defecto.

generatePDF: Función HTTP Callable que recibe el documentoId, toma los datos_formulario, inyecta la información en una plantilla HTML/Handlebars, utiliza Puppeteer para convertirlo a PDF, lo guarda en Firebase Storage y actualiza la url_pdf.

wompiWebhook: Función HTTP REST que recibe las notificaciones de pago de Wompi, verifica la firma criptográfica (checksum) y cambia el estado del documento a pagado.

5. Directrices de Código para el Agente (Antigravity)
Modularidad Firebase v10: Usa siempre importaciones modulares (ej. import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';), nunca la versión compat/v8.

Componentes React: Usa Functional Components y Hooks (useState, useEffect). Evita clases.

Gestión del Estado: Para la primera fase, usa React Context para manejar el usuario logueado (AuthContext).

Seguridad: En el Frontend, nunca expongas lógica de validación de pagos. El frontend solo genera la intención de pago; el Webhook de Cloud Functions es la única fuente de verdad para liberar un PDF.

Formularios Dinámicos: Los contratos (Arrendamiento, Petición, etc.) tendrán formularios complejos. Diseña componentes reutilizables en React para Inputs, Selects y Switches (especialmente para lógicas condicionales, como mostrar campos adicionales si el inmueble es Propiedad Horizontal).