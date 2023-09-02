import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "solid" | "outlined";
}

export const Button: React.FC<Props> = ({
  children,
  variant = "solid",
  className = "",
  ...props
}) => {
  return (
    <button
      className={twMerge(
        `  
        ${
          variant === "solid"
            ? "text-neutral-lightest bg-brand-primary"
            : "text-brand-primary border-brand-primary border-1 hover:text-neutral-lightest"
        }
        w-[9.375rem] 
        h-[50px]
        text-sm font-semibold
        rounded 
        px-4 py-3
        hover:bg-brand-primary-dark 
        active:bg-brand-primary
        transition-colors duration-200
      `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
