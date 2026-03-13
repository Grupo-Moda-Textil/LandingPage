import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', animated = true, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-bright-snow';
    
    const variants = {
      primary: 'bg-golden-bronze text-bright-snow hover:bg-yellow-600',
      outline: 'border border-golden-bronze text-golden-bronze hover:bg-golden-bronze hover:text-bright-snow',
      ghost: 'hover:bg-carbon-black hover:text-bright-snow text-carbon-black'
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs',
      md: 'h-10 px-6 py-3',
      lg: 'h-12 px-8 text-lg'
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (animated) {
      return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={combinedClasses}
          ref={ref as any}
          {...(props as HTMLMotionProps<"button">)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button className={combinedClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
