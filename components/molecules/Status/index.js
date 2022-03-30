import * as S from "./style";
import { Text, Tag } from "../../atom";
const Status = ({ title, list }) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text type="h3">{title}</Text>
      </S.TitleWrapper>
      {list &&
        list.map((item, index, array) => {
          return (
            <S.ItemWrapper key={index}>
              <S.KeyWrapper>
                <Text type="h4">{item.category}</Text>
              </S.KeyWrapper>
              <S.ValueWrapper>
                {typeof item.value == typeof [] ? (
                  <Tag list={item.value} />
                ) : (
                  <Text>{item.value}</Text>
                )}
              </S.ValueWrapper>
            </S.ItemWrapper>
          );
        })}
    </S.Container>
  );
};

export default Status;
