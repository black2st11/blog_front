import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import * as S from "./style";

const name = "Moon Blog";
export const siteTitle = "Moon Blog";

export default function Layout({ children, home }) {
  return (
    <S.Container>
      <Header home={home} />
      <Main>{children}</Main>
      <Footer />
    </S.Container>
  );
}
