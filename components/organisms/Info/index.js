import * as S from "./style";
import { IconText } from "../../molecules";

const Info = ({ info }) => {
  return (
    <S.Container>
      {info ? (
        info.map((item, index, array) => {
          return <IconText key={index} {...item} />;
        })
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default Info;
