import * as S from "./style";
import Image from "next/image";
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
              <S.Title>문정훈</S.Title>
            </S.TitleWrapper>
            <S.InfoWrapper>
              <S.Info>Email. black2st11@gmail.com</S.Info>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.Info>Tel. 010-8614-7257</S.Info>
            </S.InfoWrapper>
          </S.ColWrapper>
        </S.RowWrapper>
      </S.Inner>
    </S.Container>
  );
};

export default Footer;
