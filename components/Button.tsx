"use client";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import clsx from "clsx";

export const buttonVariants = cva(
  "inline-block text-center px-6 py-3 rounded-lg border font-medium active:scale-105 eq",

  {
    variants: {
      variant: {
        dark: "border-light bg-dark text-white hover:border-dark-700/90 hover:bg-dark-700/80 ",
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

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  variant,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href}
      target={target}
      onClick={onClick}
      className={clsx(buttonVariants({ variant }))}
    >
      {children}
    </Link>
  );
};

export default Button;
