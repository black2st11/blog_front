import * as S from "./style";

const Main = ({ children }) => {
  return (
    <S.Container>
      <S.Inner>{children}</S.Inner>
    </S.Container>
  );
};
export default Main;
