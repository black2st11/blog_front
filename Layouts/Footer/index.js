import Image from "next/image";

import { info } from "../../config";
import * as S from "./style";
import Logo from "../../public/images/FooterLogo.png";

const Footer = () => {
  return (
    <S.Container>
      <S.Inner>
        <S.RowWrapper>
          <S.LogoWrapper>
            <Image src={Logo} />
          </S.LogoWrapper>
          <S.ColWrapper>
            <S.TitleWrapper>
              <S.Title>{info.name}</S.Title>
            </S.TitleWrapper>
            <S.InfoWrapper>
              <S.Info>Email. {info.email}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Info>Position. {info.position}</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Info>Address. {info.address}</S.Info>
            </S.InfoWrapper>
          </S.ColWrapper>
        </S.RowWrapper>
      </S.Inner>
    </S.Container>
  );
};

export default Footer;
