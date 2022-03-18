import * as S from "./style";
import { IconText } from "../../molecules";

const Info = ({ info }) => {
  console.log(info);

  return (
    <S.Container>
      {info ? (
        info.map((item, index, array) => {
          return <IconText {...item} />;
        })
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default Info;
