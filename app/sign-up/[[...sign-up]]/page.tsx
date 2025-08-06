import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { ArrowLeft, Brain, Target, Zap, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SignUpPage() {
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
      <div className="relative z-10 flex min-h-screen items-center justify-center px-0 py-0 sm:px-6 sm:py-12">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center">
            
            {/* Left Side - Branding & Benefits */}
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
                  Nunca olvides un nombre importante
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8">
                  Únete a quienes ya crean relaciones auténticas recordando nombres importantes. Crea tu cuenta gratis.
                </p>
              </div>
              
              {/* Benefits */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Recuerda lo importante</h3>
                    <p className="text-muted-foreground">Guarda nombres, alias y detalles clave</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Crea hitos memorables</h3>
                    <p className="text-muted-foreground">Registra momentos y conversaciones importantes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Funciona sin internet</h3>
                    <p className="text-muted-foreground">Instala la app y accede desde cualquier lugar</p>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <Card className="mt-12 glass-effect">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-3" />
                  <blockquote className="text-base text-foreground mb-3 italic leading-relaxed">
                    &ldquo;Recuerda que el nombre de una persona es, para esa persona, el sonido más dulce e importante en cualquier idioma.&rdquo;
                  </blockquote>
                  <footer className="text-muted-foreground text-sm">
                    <strong className="text-foreground">Dale Carnegie</strong>
                  </footer>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Side - Sign Up Form */}
            <div className="flex justify-center lg:justify-end w-full">
              <div className="w-full lg:max-w-md">
                {/* Mobile Logo */}
                <div className="mb-4 text-center lg:hidden px-4">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-base">M</span>
                    </div>
                    <h1 className="text-2xl font-bold text-foreground">
                      Muizti
                    </h1>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Crea relaciones auténticas recordando nombres importantes
                  </p>
                </div>
                <Card className="glass-effect hover-lift w-full border-0 shadow-none lg:border lg:shadow-sm">
                  <CardContent className="p-0 sm:p-4 lg:p-8">
                  <div className="text-center mb-4 px-4 sm:px-0 sm:mb-6 lg:mb-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                      Crear Cuenta
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                      Completa el registro para comenzar
                    </p>
                  </div>
                  
                  <div className="px-4 sm:px-0">
                  <SignUp 
                    appearance={{
                      elements: {
                        rootBox: 'w-full',
                        card: 'shadow-none border-0 p-0 w-full',
                        headerTitle: 'hidden',
                        headerSubtitle: 'hidden',
                        socialButtonsBlockButton:
                          'border-border hover:bg-accent text-foreground w-full min-h-[2.5rem] text-sm sm:text-base',
                        formButtonPrimary: 
                          'bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 sm:py-3 rounded-lg transition-all duration-200 w-full min-h-[2.5rem] text-sm sm:text-base',
                        formFieldInput:
                          'border-input bg-background text-foreground min-h-[2.5rem] text-base px-3',
                        footerActionLink: 
                          'text-primary hover:text-primary/80 font-medium text-sm',
                        identityPreviewEditButton:
                          'text-muted-foreground hover:text-foreground text-sm',
                        formFieldLabel:
                          'text-foreground font-medium text-sm',
                        dividerText: 'text-xs sm:text-sm text-muted-foreground',
                        formFieldError: 'text-xs sm:text-sm text-destructive',
                        formFieldSuccessText: 'text-xs sm:text-sm text-green-600',
                        socialButtonsBlockButtonText: 'text-sm sm:text-base',
                        identityPreviewText: 'text-sm text-muted-foreground',
                        alert: 'text-xs sm:text-sm',
                        alertText: 'text-xs sm:text-sm'
                      },
                      layout: {
                        socialButtonsPlacement: 'top'
                      },
                      variables: {
                        fontSize: '14px'
                      }
                    }}
                  />
                  </div>
                  </CardContent>
                </Card>
                
                <div className="text-center mt-4 px-4 sm:px-0 sm:mt-6">
                  <p className="text-sm text-muted-foreground">
                    ¿Ya tienes cuenta?{' '}
                    <Link href="/sign-in" className="text-primary hover:text-primary/80 font-medium">
                      Inicia sesión
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