import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export const BenefitTitle: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h4
      className={twMerge(
        "text-brand-primary-dark text-[1.325rem] font-bold leading-[130%] my-4",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
