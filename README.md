# Muizti - Aplicación de Gestión de Relaciones Personales 🤝

## 📖 Descripción General

**Muizti** es una aplicación web progresiva (PWA) diseñada para ayudarte a gestionar y fortalecer tus relaciones personales y profesionales. Inspirada en los principios de Dale Carnegie sobre la importancia de recordar nombres y detalles personales, Muizti te permite organizar contactos, registrar momentos importantes y mantener conexiones significativas.

## 🎯 Características Principales

### 1. **Espacios de Mundo (World Spaces)**
- Organiza tus contactos en diferentes contextos (trabajo, personal, networking)
- Personaliza cada espacio con emojis distintivos
- Gestiona múltiples grupos de contactos de forma independiente

### 2. **Gestión de Personas**
- Registra nombres completos y apodos
- Añade notas personales y detalles importantes
- Asigna emojis visuales para identificación rápida
- Búsqueda rápida por nombre o alias

### 3. **Hitos y Momentos**
- Documenta conversaciones importantes
- Registra fechas significativas
- Mantiene un historial de interacciones
- Añade notas detalladas sobre cada encuentro

### 4. **Progressive Web App (PWA)**
- Instalable en dispositivos móviles y escritorio
- Funciona sin conexión (modo offline)
- Notificaciones push (próximamente)
- Experiencia nativa en dispositivos móviles

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: Next.js 15.4.5 con React 19.1.0
- **Estilos**: Tailwind CSS v4
- **Autenticación**: Clerk
- **Base de Datos**: Supabase (PostgreSQL)
- **Gestión de Estado**: TanStack Query (React Query)
- **Lenguaje**: TypeScript

### Estructura del Proyecto

```
app-santa-list/
│
├── app/                        # Directorio principal de Next.js App Router
│   ├── layout.tsx             # Layout raíz con ClerkProvider
│   ├── page.tsx               # Página de inicio (landing)
│   ├── app/                   # Rutas protegidas de la aplicación
│   │   ├── dashboard/         # Panel principal del usuario
│   │   ├── workspace/[id]/    # Gestión de espacios individuales
│   │   └── people/[personId]/ # Detalles y hitos de personas
│   ├── sign-in/              # Páginas de autenticación (Clerk)
│   └── sign-up/              # Páginas de registro (Clerk)
│
├── lib/                       # Lógica de negocio y utilidades
│   ├── entities/             # Definiciones de tipos TypeScript
│   ├── services/             # Capa de servicios API
│   ├── hooks/                # Custom hooks de React Query
│   └── supabase/             # Configuración del cliente Supabase
│
├── components/               # Componentes reutilizables
│   ├── ui/                  # Componentes UI base
│   └── [componentes app]    # Componentes específicos de la aplicación
│
└── public/                  # Archivos estáticos y assets
    └── icons/              # Iconos PWA y favicon
```

## 📝 Guía de Uso Paso a Paso

### Paso 1: Registro e Inicio de Sesión
1. Accede a la aplicación en tu navegador
2. Haz clic en "Comenzar" o "Iniciar Sesión"
3. Crea una cuenta usando tu email o Google
4. Serás redirigido automáticamente al dashboard

### Paso 2: Crear tu Primer Espacio de Mundo
1. En el dashboard, haz clic en "Crear Espacio"
2. Asigna un nombre descriptivo (ej: "Trabajo", "Familia", "Networking")
3. Selecciona un emoji representativo
4. Guarda el espacio

### Paso 3: Añadir Personas
1. Entra en un espacio de mundo
2. Haz clic en "Añadir Persona"
3. Ingresa el nombre completo y alias (apodo)
4. Elige un emoji para identificación visual
5. Guarda la información

### Paso 4: Registrar Hitos
1. Selecciona una persona de tu lista
2. Haz clic en "Añadir Hito"
3. Escribe el título del momento importante
4. Añade detalles y notas relevantes
5. Guarda el hito con fecha automática

### Paso 5: Buscar y Organizar
1. Usa la barra de búsqueda para encontrar personas rápidamente
2. Filtra por espacios de mundo
3. Ordena contactos por fecha de creación o nombre

### Paso 6: Instalar como App (PWA)
1. En dispositivos móviles, abre el menú del navegador
2. Selecciona "Añadir a pantalla de inicio" o "Instalar app"
3. La app se instalará con icono propio
4. Accede directamente desde tu pantalla de inicio

## 🔐 Modelo de Datos

### Relaciones de Base de Datos

```
Usuario (Clerk Auth)
    ↓
WorldSpace (Espacios de Mundo)
    ├── id: único
    ├── user_id: referencia al usuario
    ├── name: nombre del espacio
    └── emoji: emoji representativo
         ↓
    Person (Personas)
        ├── id: único
        ├── world_space_id: referencia al espacio
        ├── name: nombre completo
        ├── alias: apodo o alias
        └── emoji: emoji representativo
             ↓
        Milestone (Hitos)
            ├── id: único
            ├── people_id: referencia a la persona
            ├── title: título del hito
            ├── description: descripción detallada
            └── created_at: fecha de creación
```

## 🚀 Instalación para Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta en Clerk (autenticación)
- Cuenta en Supabase (base de datos)

### Paso a Paso

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd app-santa-list
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Crea un archivo `.env.local` con:
```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
CLERK_SECRET_KEY=tu_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/app/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/app/dashboard

# Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Configurar la base de datos en Supabase**
- Crea las tablas según el modelo de datos
- Configura Row Level Security (RLS)
- Añade políticas de seguridad

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

6. **Acceder a la aplicación**
Abre `http://localhost:3000` en tu navegador

## 📦 Comandos Disponibles

```bash
npm run dev        # Inicia servidor de desarrollo con Turbopack
npm run build      # Construye para producción
npm run start      # Inicia servidor de producción
npm run lint       # Ejecuta ESLint
npx tsc --noEmit   # Verifica tipos de TypeScript
```

## 🛠️ Configuración Técnica Detallada

### Autenticación con Clerk
- Middleware protege todas las rutas `/app/*`
- Integración con Supabase mediante JWT tokens
- Redirección automática post-autenticación

### Base de Datos Supabase
- PostgreSQL con Row Level Security (RLS)
- Acceso directo desde el cliente (sin API backend)
- Políticas de seguridad basadas en user_id

### Gestión de Estado
- React Query para cache y sincronización
- Actualizaciones optimistas en operaciones CRUD
- Invalidación automática de cache

### PWA Configuration
- Manifest.json para instalación
- Service Worker para funcionamiento offline
- Iconos en múltiples resoluciones
- Tema personalizado y colores de marca

## 🎨 Diseño y UX

### Principios de Diseño
- Mobile-first responsive design
- Interfaz en español para usuarios hispanohablantes
- Sistema de cards con efectos hover
- Navegación intuitiva con breadcrumbs
- Feedback visual inmediato en todas las acciones

### Componentes UI Reutilizables
- `Card`: Contenedor principal para contenido
- `Button`: Botones con variantes y estados
- `Input/Label`: Formularios accesibles
- `Dialog`: Modales para acciones importantes
- `Skeleton`: Estados de carga elegantes

## 🔄 Flujo de Datos

1. **Usuario realiza acción** → 
2. **React Query hook** → 
3. **Service layer** → 
4. **Supabase client** → 
5. **Base de datos PostgreSQL** → 
6. **Respuesta con datos** → 
7. **Actualización de UI**

## 🚢 Despliegue

### Recomendado: Vercel
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push a main

### Configuración de Producción
- Habilita optimizaciones de build
- Configura dominio personalizado
- Activa HTTPS automático
- Monitorea con Analytics

## 📱 Funcionalidades PWA

### Instalación
- **Android**: Chrome → Menú → "Instalar app"
- **iOS**: Safari → Compartir → "Añadir a pantalla de inicio"
- **Desktop**: Chrome/Edge → Barra de direcciones → Icono de instalación

### Características Offline
- Cache de datos visitados recientemente
- Sincronización al recuperar conexión
- Notificaciones de estado de conexión

## 🔒 Seguridad

### Medidas Implementadas
- Autenticación robusta con Clerk
- Row Level Security en Supabase
- Validación de tipos con TypeScript
- Sanitización de inputs de usuario
- HTTPS obligatorio en producción

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia privada. Todos los derechos reservados.

## 👥 Equipo

Desarrollado con ❤️ para ayudar a las personas a mantener y fortalecer sus relaciones personales y profesionales.

---

**Muizti** - Porque cada persona es importante y merece ser recordada 🌟
