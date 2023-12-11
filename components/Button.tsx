import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariance= cva(
  'inline-block text-center px-6 py-3 rounded-lg border font-medium active:scale-105 eq',

  {
    variants: {
      variant: {
        dark: 'border-dark bg-dark text-white hover:border-dark-700/90 hover:bg-dark-700/80 ',
        outline:
          'border-blue-900 bg-transparent text-light hover:bg-blue/70 eq',
    
      },
      size: {
        auto: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'dark',
      size: 'auto',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  variant,
  size,
  isLoading,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        buttonVariance({ variant, size }),
        isLoading && 'flex items-center justify-center gap-2.5',
      
      )}
    >
      {children}
    </button>
  );
};

export default Button;