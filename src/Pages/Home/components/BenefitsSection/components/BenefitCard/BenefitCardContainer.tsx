import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BenefitCardContainer: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge("w-auto lg:w-[21.75rem] rounded-lg shadow-lg p-6 bg-neutral-lightest  z-10", className)}
      {...props}
    >
      {children}
    </div>
  );
};
