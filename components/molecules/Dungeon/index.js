import * as S from "./style";
import { Text } from "../../atom";

const Dungeon = ({
  name,
  difficulty,
  duration,
  address,
  size,
  descriptions,
  impression,
}) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text type="h4">{name}</Text>
        <S.GradeWrapper>{difficulty}</S.GradeWrapper>
      </S.TitleWrapper>
      <S.ItemWrapper>
        <S.KeyWrapper>기간</S.KeyWrapper>
        <S.ValueWrapper>{duration}</S.ValueWrapper>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.KeyWrapper>위치</S.KeyWrapper>
        <S.ValueWrapper>{address}</S.ValueWrapper>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.KeyWrapper>규모</S.KeyWrapper>
        <S.ValueWrapper>{size}</S.ValueWrapper>
      </S.ItemWrapper>
      <S.ContentWrapper>
        {descriptions &&
          Object.entries(descriptions).map(([key, value]) => (
            <S.Content>{value.content}</S.Content>
          ))}
      </S.ContentWrapper>
      <S.FinalWrapper>결과 : {impression}</S.FinalWrapper>
    </S.Container>
  );
};

export default Dungeon;
