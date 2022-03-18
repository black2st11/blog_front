import * as S from "./style";
import { Text } from "../../atom";
import { useState, useEffect } from "react";
const Archiving = ({ title, list }) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text type="h4">{title}</Text>
      </S.TitleWrapper>
      {list &&
        list.map((item, index, array) => {
          return (
            <S.ListWrapper key={index}>
              <Text>- {item}</Text>
            </S.ListWrapper>
          );
        })}
    </S.Container>
  );
};

export default Archiving;
