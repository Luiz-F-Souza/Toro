import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: string,
}

export const BenefitDescription: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={twMerge("text-gray-07 leading-6 font-normal", className)} {...props}>
      {children}
    </p>
  );
};
