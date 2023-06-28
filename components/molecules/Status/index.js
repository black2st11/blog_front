import * as S from "./style";
import { Text, Tag } from "../../atom";

const Status = ({ title, data }) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <Text type="h3">{title}</Text>
      </S.TitleWrapper>

      {data &&
        Object.entries(data).map(([key, value]) => (
          <S.ItemWrapper>
            <S.KeyWrapper>
              <Text type="h4">{key}</Text>
            </S.KeyWrapper>
            <S.ValueWrapper>
              {typeof value == typeof [] ? (
                <Tag list={value} />
              ) : (
                <Text>{value}</Text>
              )}
            </S.ValueWrapper>
          </S.ItemWrapper>
        ))}
    </S.Container>
  );
};

export default Status;
