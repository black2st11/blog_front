import * as S from "./style";
import { Tag } from "antd";
import Date from "../../../utils/date";
import { colorPallete } from "../../../styles/config";

const PostTitle = ({ title, tag, created_at }) => {
  return (
    <S.Container>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.TagWrapper>
        {tag &&
          tag.map((v, i, a) => {
            return (
              <Tag color={colorPallete.black} key={i}>
                {v.name}
              </Tag>
            );
          })}
      </S.TagWrapper>
      <S.DateWrapper>{Date({ dateString: created_at })}</S.DateWrapper>
    </S.Container>
  );
};

export default PostTitle;
