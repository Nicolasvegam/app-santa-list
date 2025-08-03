import { Loader } from './loader';

interface PageLoaderProps {
  message?: string;
}

export function PageLoader({ message = 'Cargando...' }: PageLoaderProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <Loader size="lg" variant="spinner" className="mx-auto mb-4" />
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function InlineLoader({ message = 'Cargando...' }: PageLoaderProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <Loader size="md" variant="spinner" className="mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}