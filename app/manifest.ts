import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muizti - Nunca olvides un nombre importante',
    short_name: 'Muizti',
    description: 'Crea relaciones auténticas recordando los nombres y detalles de las personas que importan. Aplica los principios de Dale Carnegie.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D97706', // Claude orange color
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'es',
    categories: ['productivity', 'lifestyle', 'social'],
    icons: [
      {
        src: '/icons/icon-72x72.svg',
        sizes: '72x72',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-96x96.svg',
        sizes: '96x96',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-128x128.svg',
        sizes: '128x128',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-144x144.svg',
        sizes: '144x144',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-152x152.svg',
        sizes: '152x152',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-192x192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-384x384.svg',
        sizes: '384x384',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-512x512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/mobile-1.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Dashboard de espacios de trabajo'
      },
      {
        src: '/screenshots/desktop-1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Vista de escritorio'
      }
    ],
    shortcuts: [
      {
        name: 'Nuevo Espacio',
        short_name: 'Nuevo',
        description: 'Crear un nuevo espacio de trabajo',
        url: '/app/workspace/new',
        icons: [{ src: '/icons/shortcut-new.png', sizes: '96x96' }]
      },
      {
        name: 'Dashboard',
        short_name: 'Inicio',
        description: 'Ver todos tus espacios',
        url: '/app/dashboard',
        icons: [{ src: '/icons/shortcut-dashboard.png', sizes: '96x96' }]
      }
    ],
  }
}