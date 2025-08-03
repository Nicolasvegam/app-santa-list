import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <Skeleton className="h-9 w-64 mb-2" />
            <Skeleton className="h-5 w-96" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-24" />
          </div>
        </div>

        <div className="mb-8 max-w-2xl">
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          <Card className="h-32">
            <CardContent className="h-full flex items-center justify-center p-6">
              <div className="text-center">
                <Skeleton className="w-10 h-10 mx-auto mb-2" />
                <Skeleton className="h-4 w-20" />
              </div>
            </CardContent>
          </Card>
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="h-32">
              <CardContent className="h-full flex flex-col items-center justify-center p-6">
                <Skeleton className="w-8 h-8 rounded-lg mb-2" />
                <Skeleton className="h-3 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkspaceSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Skeleton className="h-4 w-64 mb-4" />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-lg" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-8 w-8" />
                </div>
                <Skeleton className="h-4 w-32 mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex justify-between items-center">
          <div>
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          <Card className="h-44">
            <CardContent className="h-full flex items-center justify-center p-6">
              <div className="text-center">
                <Skeleton className="w-10 h-10 mx-auto mb-3" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>
          {[...Array(7)].map((_, i) => (
            <Card key={i} className="h-44">
              <CardContent className="h-full flex flex-col items-center justify-center p-6">
                <Skeleton className="w-12 h-12 rounded-full mb-3" />
                <Skeleton className="h-4 w-20 mb-1" />
                <Skeleton className="h-3 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PersonDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <Skeleton className="h-4 w-96" />
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <Skeleton className="w-16 h-16 rounded-lg" />
              <div className="flex-1">
                <div className="space-y-2">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-5 w-32" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-9 w-24" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Skeleton className="w-2 h-2 rounded-full" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function PeopleListSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <Skeleton className="h-4 w-96" />
        </div>

        <div className="flex justify-between items-center mt-8 mb-8">
          <div>
            <Skeleton className="h-9 w-64 mb-2" />
            <Skeleton className="h-5 w-96" />
          </div>
          <Skeleton className="h-10 w-36" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {[...Array(12)].map((_, i) => (
            <Card key={i} className="h-32">
              <CardContent className="h-full flex flex-col items-center justify-center p-6">
                <Skeleton className="w-8 h-8 rounded-full mb-2" />
                <Skeleton className="h-3 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}