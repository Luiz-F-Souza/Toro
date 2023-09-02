import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export const BenefitIcon: React.FC<Props> = ({ src, alt = "", className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={twMerge('w-[25px] h-[25px]',className)}
      width={25}
      height={25}
    />
  );
};
