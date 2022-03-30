import * as S from "./style";
import { Archiving } from "../../molecules";
import { useState, useEffect } from "react";
const Archives = ({ archive }) => {
  const [scrollX, setScrollX] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", getCurrentScroll);
    setScrollX(window.innerWidth);

    return () => window.removeEventListener("resize", getCurrentScroll);
  }, []);
  const getCurrentScroll = (event) => {
    setScrollX(window.innerWidth);
  };
  let phoneWidth = 680;
  return (
    <S.Container is_phone={phoneWidth > scrollX}>
      {archive.map((item, index, array) => {
        return (
          <S.ItemWrapper key={index}>
            <Archiving {...item} />
          </S.ItemWrapper>
        );
      })}
    </S.Container>
  );
};

export default Archives;
