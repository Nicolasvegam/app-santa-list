import { Loader } from '@/components/ui/loader';
import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background relative flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} />
      </div>
      
      <Card className="glass-effect">
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            <Loader size="lg" variant="spinner" className="mb-4" />
            <h2 className="text-lg font-semibold text-foreground">Cargando...</h2>
            <p className="text-sm text-muted-foreground mt-2">Preparando el inicio de sesión</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}