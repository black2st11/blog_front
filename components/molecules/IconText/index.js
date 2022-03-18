import * as S from "./style";
import { Text } from "../../atom";
import { useState, useEffect } from "react";
const IconText = ({ icon, mainText, subText }) => {
  const [scrollX, setScrollX] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", getCurrentScroll);
    setScrollX(window.innerWidth);

    return () => window.removeEventListener("resize", getCurrentScroll);
  }, []);

  let padWidth = 990;
  let phoneWidth = 680;

  const getCurrentScroll = (event) => {
    setScrollX(window.innerWidth);
  };
  return (
    <S.Container
      isDesktop={padWidth < scrollX}
      isPad={padWidth >= scrollX && phoneWidth < scrollX}
      isPhone={phoneWidth >= scrollX}
    >
      <S.Wrapper>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.TextWrapper>
          <Text type="h4">{mainText}</Text>
          {subText ? <Text>{subText}</Text> : <></>}
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default IconText;
