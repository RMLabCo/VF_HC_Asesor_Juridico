README.md - Proyecto: HC Plataforma LegalTech (Serverless)
1. Contexto del Negocio: HC Asesoría Jurídica
HC Asesoría Jurídica es una firma legal colombiana con sede en Tuluá, Valle del Cauca, con más de 10 años de experiencia. El objetivo de este proyecto es su transformación digital hacia el modelo "LegalTech". La plataforma busca democratizar y automatizar el acceso a servicios jurídicos mediante la autogestión de documentos legales, integrando inteligencia artificial y una arquitectura en la nube (GCP/Firebase) para eliminar procesos manuales y burocráticos.

2. Visión General del Proyecto y Stack Tecnológico
La aplicación es una plataforma web transaccional (Frontend en React/Tailwind, Backend en Firebase/GCP).
Módulos Core:

Landing Page: Oferta pública de servicios y captación de leads.

Motor de Contratos: Sistema dinámico para la creación autogestionada de documentos legales por parte del cliente (formularios paso a paso).

Pasarela de Pagos: Integración (prevista con Wompi) para el cobro por generación de documentos.

Portal Privado (Dashboard): Plataforma con control de acceso basado en roles (RBAC) para la gestión del ciclo de vida de los contratos.

3. Control de Acceso y Funcionalidades por Rol (RBAC)
El sistema debe manejar autenticación segura (usuario/contraseña) y dividir la experiencia en tres perfiles distintos:

👤 Perfil: Cliente (Usuario Final)
Gestión de Perfil: Registro con nombre de usuario y datos básicos.

Autogestión de Contratos: El cliente solo podrá visualizar y diligenciar los tipos de contratos específicos a los que el Administrador le haya dado acceso previo.

Generación de Documentos: Capacidad de llenar formularios dinámicos y generar el documento final en formato PDF.

Historial y Reportes: Visualización de un panel (dashboard) con sus contratos elaborados, indicando tipo de contrato, cantidad y fecha de creación.

Asistencia IA: Acceso a un chatbot conversacional integrado (potenciado por Gemini/Vertex AI o flujos de n8n) para resolver dudas de uso y orientación básica (sin dar consejo legal profundo).

👑 Perfil: Administrador (Gerencia HC)
Gestión de Permisos: Capacidad de habilitar/agregar tipos de contratos específicos a los perfiles de los clientes individuales.

Gestión de Plantillas (Master): Interfaz para crear, editar y modificar la estructura lógica y de texto de los "Documentos Maestros" (las plantillas base que usan los clientes).

Auditoría y Edición: Capacidad de revisar los documentos finales elaborados por los clientes y editarlos si detectan errores jurídicos o de digitación.

Reportes Globales: Generar reportes detallados por cliente sobre la cantidad de contratos elaborados, con opción de exportación a Excel y PDF.

Gestión del Equipo: Asignar y revocar roles de "Colaborador" al personal de la firma.

🛡️ Perfil: Colaborador (Abogado / Auxiliar HC)
Auditoría y Soporte: Tienen permisos de lectura y escritura sobre los documentos generados por los clientes para corregir errores, asegurar la calidad y brindar soporte operativo.

Reportes Operativos: Capacidad de generar reportes de la cantidad de contratos elaborados por cada cliente y exportarlos en formatos Excel y PDF.

4. Sistema de Diseño y UI/UX (Design Tokens)
La interfaz debe transmitir solidez legal, tecnología y confianza. El agente debe usar estrictamente las siguientes variables CSS / clases de Tailwind para estructurar la UI:

--color-text-main: #FFFFFF (Blanco Puro)

Uso: 
- Fondos principales, fondos de sección del lienzo y color de texto contrastante en tarjetas Azul Marino Profundo

- Legibilidad y contraste. Aplicado en la marca ("HC Asesoría Jurídica"), títulos principales, subtítulos y cuerpo de texto descriptivo sobre fondos oscuros.

--color-primary-bg: #0B1325 (Azul Marino Profundo)

Uso: Fondos secundarios, fondos de sección del lienzo y color de texto contrastante en tarjetas blancas. Aporta la seriedad corporativa.


--color-accent-tech: #00C3FF (Cian / Azul Claro Brillante)

Uso: Dinamismo y enfoque digital. Aplicar en botones de llamado a la acción (CTAs), enlaces, estados hover, iconos o líneas divisorias para romper la monotonía.

--color-neutral-dark: #111827 (Gris Carbón / Negro)

Uso: Profundidad y anclaje visual. Útil para superposiciones (overlays) en imágenes, sombras de cajas (Drop shadows) o fondos de tarjetas secundarias manteniendo la sobriedad ejecutiva.

5. Instrucciones de Ejecución para el Agente (Antigravity)
Asimilación: Lee este documento y configura tu contexto interno para actuar como un Arquitecto de Software Full-Stack.

Espera de Insumos: El usuario (Human) te proveerá en los siguientes prompts:

El copy (texto) exacto para la Landing Page.

La estructura de los Documentos Legales Word que servirán como base para crear los formularios autogestionables y el motor de PDF.

Desarrollo Modular: Construye la aplicación paso a paso. No intentes generar toda la plataforma en una sola respuesta. Iniciaremos por la estructura base, luego Auth, luego la Landing, y finalmente los Dashboards según los roles descritos.