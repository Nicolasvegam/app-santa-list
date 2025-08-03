import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import { ArrowLeft, Users, Brain, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver al inicio</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Branding & Features */}
            <div className="hidden lg:block lg:pr-12">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">M</span>
                  </div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Muizti
                  </h1>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Bienvenido de vuelta
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Crea relaciones auténticas recordando nombres y detalles importantes. Inicia sesión para continuar.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Recuerda lo importante</h3>
                    <p className="text-muted-foreground">Guarda nombres, alias y detalles clave de cada persona</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Organiza tus relaciones</h3>
                    <p className="text-muted-foreground">Agrupa tus contactos por contexto: trabajo, amigos, networking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Crea hitos (Milestones)</h3>
                    <p className="text-muted-foreground">Registra momentos importantes y conversaciones memorables</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Sign In Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                {/* Mobile Logo */}
                <div className="mb-8 text-center lg:hidden">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">M</span>
                    </div>
                    <h1 className="text-3xl font-bold text-foreground">
                      Muizti
                    </h1>
                  </div>
                  <p className="text-muted-foreground">
                    Nunca olvides un nombre importante
                  </p>
                </div>
                <Card className="glass-effect hover-lift">
                  <CardContent className="p-8">
                  <div className="text-center mb-6 lg:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Iniciar Sesión
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Accede a tu cuenta para continuar
                    </p>
                  </div>
                  
                  <SignIn 
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'shadow-none border-0 p-0',
                        headerTitle: 'hidden',
                        headerSubtitle: 'hidden',
                        socialButtonsBlockButton:
                          'border-border hover:bg-accent text-foreground',
                        formButtonPrimary: 
                          'bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg transition-all duration-200',
                        formFieldInput:
                          'border-input bg-background text-foreground',
                        footerActionLink: 
                          'text-primary hover:text-primary/80 font-medium',
                        identityPreviewEditButton:
                          'text-muted-foreground hover:text-foreground',
                        formFieldLabel:
                          'text-foreground font-medium'
                      },
                      layout: {
                        socialButtonsPlacement: 'top'
                      }
                    }}
                  />
                  </CardContent>
                </Card>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    ¿No tienes cuenta?{' '}
                    <Link href="/sign-up" className="text-primary hover:text-primary/80 font-medium">
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}