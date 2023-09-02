import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: "solid" | "outlined";
  to: string;
}

export const LinkButton: React.FC<Props> = ({
  children,
  variant = "solid",
  className = "",
  to,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={twMerge(
        `  
          ${
            variant === "solid"
              ? "text-neutral-lightest bg-brand-primary"
              : "text-brand-primary border-brand-primary border-1 hover:text-neutral-lightest"
          }
          block
          w-[9.375rem] 
          h-[50px]
          text-sm font-semibold
          text-center
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
    </Link>
  );
};
