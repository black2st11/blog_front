import * as S from "./style";
import { Text } from "../../atom";

const Dungeon = ({
  name,
  grade,
  duration,
  loc,
  size,
  description,
  impression,
}) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text type="h4">{name}</Text>
        <S.GradeWrapper>{grade}</S.GradeWrapper>
      </S.TitleWrapper>
      <S.ItemWrapper>
        <S.KeyWrapper>기간</S.KeyWrapper>
        <S.ValueWrapper>{duration}</S.ValueWrapper>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.KeyWrapper>위치</S.KeyWrapper>
        <S.ValueWrapper>{loc}</S.ValueWrapper>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.KeyWrapper>규모</S.KeyWrapper>
        <S.ValueWrapper>{size}</S.ValueWrapper>
      </S.ItemWrapper>
      <S.ContentWrapper>
        {description &&
          description.map((value, index, array) => (
            <S.Content key={index}>{value}</S.Content>
          ))}
      </S.ContentWrapper>
      <S.FinalWrapper>결과 : {impression}</S.FinalWrapper>
    </S.Container>
  );
};

export default Dungeon;
