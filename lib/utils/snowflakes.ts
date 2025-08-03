export function generateSnowflakes(count: number) {
  const snowflakes = [];
  
  for (let i = 0; i < count; i++) {
    const seed = i * 137.5;
    const left = ((seed * 9.9) % 100);
    const delay = ((seed * 1.3) % 10);
    const size = ((seed * 0.7) % 10) + 10;
    const duration = ((seed * 0.5) % 5) + 10;
    
    snowflakes.push({
      id: i,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      fontSize: `${size}px`,
      animationDuration: `${duration}s`
    });
  }
  
  return snowflakes;
}

export function getWorkspaceAnimationDelay(index: number): string {
  const delay = (index * 0.3) % 2;
  return `${delay}s`;
}