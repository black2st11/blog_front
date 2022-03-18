import * as S from "./style";
import Image from "next/image";
const TechnicalIcon = ({ type, src, alt }) => {
  if (type == "long") {
    return (
      <S.Container>
        <S.HoverText></S.HoverText>
        <Image src={src} alt={alt} width={200} height={100} />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.HoverText></S.HoverText>
      <Image src={src} alt={alt} width={100} height={100} />
    </S.Container>
  );
};

export default TechnicalIcon;
