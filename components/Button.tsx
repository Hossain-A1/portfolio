import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const buttonVariance = cva(
  "inline-block text-center px-6 py-3 rounded-lg border font-medium active:scale-105 eq",

  {
    variants: {
      variant: {
        dark: "border-dark bg-dark text-white hover:border-dark-700/90 hover:bg-dark-700/80 ",
        outline:
          "border-blue-900 bg-transparent max-lg:text-sm text-light hover:bg-blue/70 eq",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {
  isLoading?: boolean;
  href:string,
  
}
const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  isLoading,
  children,
  href,
  type,
  
}) => {
  return (
    <Link
  
      href={ href }
      type={type}
      className={cn(
        buttonVariance({ variant, size }),
        isLoading && "flex items-center justify-center gap-2.5"
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
