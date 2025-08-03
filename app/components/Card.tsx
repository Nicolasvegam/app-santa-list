import React from 'react';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isAddCard?: boolean;
}

export function Card({ children, onClick, className = '', isAddCard = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-lg border border-gray-200 p-4
        ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}
        ${isAddCard ? 'bg-gray-50/50 backdrop-blur-sm border-dashed border-gray-300' : 'bg-white'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}