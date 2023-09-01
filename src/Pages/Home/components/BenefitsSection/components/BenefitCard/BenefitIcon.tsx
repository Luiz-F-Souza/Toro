interface Props {
  src: string;
  alt?: string;
  className?: string;
}

export const BenefitIcon: React.FC<Props> = ({ src, alt = "", className }) => {
  return <img src={src} alt={alt} loading="lazy" className={className} />;
};
