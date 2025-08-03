'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, X, Smartphone, Monitor } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      
      // Show banner after user has been on the app for a bit
      setTimeout(() => setShowBanner(true), 5000);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowBanner(false);
      setIsInstallable(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt for next time
    setDeferredPrompt(null);
    setShowBanner(false);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-banner-dismissed', 'true');
  };

  // Don't show if already installed or dismissed this session
  if (isInstalled || (typeof window !== 'undefined' && sessionStorage.getItem('pwa-banner-dismissed'))) {
    return null;
  }

  // Inline install button (for dashboard and other key pages)
  if (isInstallable && !showBanner) {
    return (
      <Button
        onClick={handleInstallClick}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        Instalar App
      </Button>
    );
  }

  // Full banner (shown strategically)  
  if (showBanner && isInstallable) {
    return (
      <Card className="fixed bottom-4 left-4 right-4 z-50 shadow-lg border-primary/20 md:left-auto md:right-4 md:max-w-sm">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Instalar Muizti</h3>
                <p className="text-xs text-muted-foreground">Acceso rápido desde tu pantalla de inicio</p>
              </div>
            </div>
            <Button
              onClick={handleDismiss}
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
            <Smartphone className="w-3 h-3" />
            <span>Funciona sin internet</span>
            <Monitor className="w-3 h-3 ml-2" />
            <span>Experiencia nativa</span>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleInstallClick}
              size="sm"
              className="flex-1 h-8 text-xs"
            >
              <Download className="w-3 h-3 mr-1" />
              Instalar
            </Button>
            <Button
              onClick={handleDismiss}
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs"
            >
              Ahora no
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}

// Hook for other components to check PWA status
export function usePWA() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Check if running as PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = () => {
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return { isInstalled, isInstallable };
}