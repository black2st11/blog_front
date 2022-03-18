import * as S from "./style";
import { Text } from "../../atom";
const Description = ({ title, list }) => {
  return (
    <S.Contaienr>
      <S.TitleWrapper>
        <Text type="h3">{title}</Text>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.Content>
          {list.map((item, index, array) => (
            <S.Item key={index}>{item}</S.Item>
          ))}
        </S.Content>
      </S.ContentWrapper>
    </S.Contaienr>
  );
};

export default Description;
