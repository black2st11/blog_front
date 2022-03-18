import * as S from "./style";
import { Text, TechnicalIcon } from "../../atom";
import { useState, useEffect } from "react";

const SkillSet = ({ skill }) => {
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
    <S.Container>
      <S.TitleWrapper>
        <Text type="h2">{skill.title}</Text>
      </S.TitleWrapper>
      <S.ItemContainer is_phone={scrollX < phoneWidth}>
        {skill.list.map((item, index, array) => {
          return (
            <S.ItemWrapper key={index}>
              <TechnicalIcon {...item} />
            </S.ItemWrapper>
          );
        })}
      </S.ItemContainer>
    </S.Container>
  );
};

export default SkillSet;
