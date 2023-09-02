import { BenefitCardContainer } from "./BenefitCardContainer";
import { BenefitDescription } from "./BenefitDescription";
import { BenefitIcon } from "./BenefitIcon";
import { BenefitTitle } from "./BenefitTitle";

interface Props {
  iconSrc: string;
  title: string;
  description: string;
}
export const BenefitCard: React.FC<Props> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <BenefitCardContainer>
      <BenefitIcon src={iconSrc} />
      <BenefitTitle>{title}</BenefitTitle>
      <BenefitDescription>{description}</BenefitDescription>
    </BenefitCardContainer>
  );
};
