import Head from "next/head";
import { useRouter } from "next/router";
import * as S from "./style";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Nav } from "../../components/molecules";
import { dataProps } from "./data";

export default function Header({ home }) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", getCurrentScroll);

    return () => window.removeEventListener("scroll", getCurrentScroll);
  }, []);

  const getCurrentScroll = event => {
    setScrollY(window.pageYOffset);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Moon Blog for Introducing my self" />
        <title>Moon Blog</title>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            dataProps.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={dataProps.title} />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {router.pathname == "/" ? (
        <S.Container isHome={true}>
          <Nav
            isTop={scrollY < 1}
            title={dataProps.title}
            menus={dataProps.menus}
          />
          <S.TopBanner isHome={true}>
            <TypeAnimation {...dataProps.typeAnimation} />
          </S.TopBanner>
        </S.Container>
      ) : (
        <S.Container>
          <Nav
            isTop={scrollY < 1}
            title={dataProps.title}
            menus={dataProps.menus}
          />
          <S.TopBanner isHome={false}>
            <S.Loc>{router.pathname.split("/")[1].toUpperCase()}</S.Loc>
          </S.TopBanner>
        </S.Container>
      )}
    </>
  );
}
