'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Brain, Users, Target, Zap, CheckCircle, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from './components/Header';
import { EmojiCarousel } from './components/EmojiCarousel';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Nunca olvides un{' '}
                <span className="text-primary block sm:inline-flex sm:items-center sm:gap-3">
                  nombre importante
                  <span className="hidden sm:inline-block">
                    <EmojiCarousel inline />
                  </span>
                </span>
              </h1>
              <div className="mb-6 -mt-4 sm:hidden">
                <EmojiCarousel inline={false} />
              </div>
            </div>
            
            <div className="animate-slide-up">
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Crea relaciones auténticas recordando los nombres y detalles de las personas que importan.
              </p>
            </div>
            
            <div className="animate-scale-in flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <Link href="/sign-up">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Empieza gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                Ver cómo funciona
              </Button>
            </div>
            
            <div className="mt-12 animate-fade-in">
              <Card className="glass-effect hover-lift max-w-lg mx-auto">
                <CardContent className="p-2 sm:p-4">
                  <div className="relative w-full rounded-lg overflow-hidden">
                    <Image
                      src="/preview_hero.png"
                      alt="Muizti Dashboard Preview"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              &ldquo;Recordar un nombre es recordar una identidad. Con Muizti aplicas el principio de Dale Carnegie: 
              hacer que las personas se sientan importantes.&rdquo;
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover-lift border-border/50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  Recuerda lo importante
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Guarda nombres, alias y detalles clave de cada persona.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  Crea hitos (Milestones)
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Registra momentos importantes y conversaciones memorables.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  Organiza tus relaciones
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Agrupa tus contactos por contexto: trabajo, amigos, networking.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  Funciona sin internet
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Instala la app y accede a tus contactos desde cualquier lugar.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 block sm:hidden">
            <p className="text-sm text-muted-foreground mb-4">
              💡 <strong>Tip:</strong> Instala Muizti como app en tu dispositivo para acceso rápido
            </p>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/sign-up">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Crea tu cuenta gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">
            Lo que dice la ciencia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <blockquote className="text-base text-foreground mb-4 italic leading-relaxed">
                  &ldquo;Recuerda que el nombre de una persona es, para esa persona, el sonido más dulce e importante en cualquier idioma.&rdquo;
                </blockquote>
                <footer className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Dale Carnegie</strong> - How to Win Friends and Influence People
                  <br />
                  <a href="https://www.dalecarnegie.com/" target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline">
                    Fuente: Dale Carnegie Institute
                  </a>
                </footer>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <blockquote className="text-base text-foreground mb-4 italic leading-relaxed">
                  &ldquo;Recordar y usar el nombre de una persona aumenta la sensación de conexión y confianza interpersonal.&rdquo;
                </blockquote>
                <footer className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Psychology Today</strong> - Estudios de psicología social
                  <br />
                  <a href="https://www.psychologytoday.com/us/blog/the-science-success/201411/the-psychology-remembering-names" 
                     target="_blank" rel="noopener noreferrer" 
                     className="text-primary hover:underline">
                    Fuente: Psychology Today
                  </a>
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Cómo funciona Muizti
            </h2>
            <p className="text-lg text-muted-foreground">
              Comienza en minutos y transforma tus relaciones.
            </p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-6">
            {[
              { step: 1, title: "Regístrate gratis", desc: "Crea tu cuenta en segundos." },
              { step: 2, title: "Crea tus World Spaces", desc: "Organiza tus contactos por grupos o contextos." },
              { step: 3, title: "Agrega personas", desc: "Guarda su nombre, alias y notas personales." },
              { step: 4, title: "Registra hitos", desc: "Anota momentos clave para no olvidar lo importante." },
              { step: 5, title: "Usa el asistente", desc: "Recibe recordatorios antes de cada interacción." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 text-primary-foreground font-bold text-sm sm:text-lg">
                  {item.step}
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-foreground mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/sign-up">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Empieza ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Empieza hoy mismo y nunca más olvides un nombre importante
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Link href="/sign-up">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Crear cuenta gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
              Ver cómo funciona
            </Button>
          </div>
          
          <div className="glass-effect rounded-2xl p-2 sm:p-4 max-w-md mx-auto">
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/preview.png"
                alt="Muizti Dashboard Preview"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold text-foreground">Muizti</span>
              </div>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                La aplicación que te ayuda a recordar nombres y crear relaciones auténticas, 
                aplicando los principios de Dale Carnegie.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Producto</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-foreground transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Precios</a></li>
                <li><Link href="/sign-up" className="hover:text-foreground transition-colors">Registrarse</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-foreground transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Muizti. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}