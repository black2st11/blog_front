import * as S from "./style";

const Text = ({ type, children, style }) => {
  if (type == "h1") {
    return <S.H1 {...style}>{children}</S.H1>;
  }

  if (type == "h2") {
    return <S.H2 {...style}>{children}</S.H2>;
  }

  if (type == "h3") {
    return <S.H3 {...style}>{children}</S.H3>;
  }

  if (type == "h4") {
    return <S.H4 {...style}>{children}</S.H4>;
  }

  return <S.P {...style}>{children}</S.P>;
};

export default Text;
