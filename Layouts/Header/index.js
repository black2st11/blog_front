import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./style";
import NoImage from "../../public/images/NoImage.png";
import topBanner from "../../public/images/topBanner.png";
import { useState, useEffect } from "react";

const siteTitle = "Moon Blog";
const dataProps = {
  title: "Moon Blog",
  nav: [
    {
      name: "스탯",
    },
    {
      name: "던전",
    },
    {
      name: "길드",
    },
    {
      name: "업적",
    },
    {
      name: "공략",
    },
    {
      name: "메시지",
    },
  ],
  info: [
    {
      category: "Name",
      value: "Moon Jung Hoon",
    },
    {
      category: "Age",
      value: "28",
    },
    {
      category: "Tel",
      value: "010-8614-7257",
    },
    {
      category: "Email",
      value: "black2st11@gmail.com",
    },
  ],
};
export default function Header({ home }) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", getCurrentScroll);

    return () => window.removeEventListener("scroll", getCurrentScroll);
  }, []);

  const getCurrentScroll = (event) => {
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
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
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
          <S.Menu isTop={scrollY < 1}>
            <S.NavWrapper>
              <S.TitleWrapper>
                <S.Title>{dataProps.title}</S.Title>
              </S.TitleWrapper>
              <S.Nav>
                {dataProps.nav.map((item, index, array) => {
                  return (
                    <S.NavItem key={index}>
                      <S.NavName>{item.name}</S.NavName>
                    </S.NavItem>
                  );
                })}
              </S.Nav>
            </S.NavWrapper>
          </S.Menu>
          <S.TopBanner isHome={true}>
            {dataProps.info.map((item, index, array) => {
              return (
                <S.ItemWrapper key={index}>
                  <S.Category active>
                    {item.category}. {item.value} <br />
                  </S.Category>
                </S.ItemWrapper>
              );
            })}
          </S.TopBanner>
        </S.Container>
      ) : (
        <S.Container>
          <S.Menu>
            <S.NavWrapper>
              <S.TitleWrapper>
                <S.Title>{dataProps.title}</S.Title>
              </S.TitleWrapper>
              <S.Nav>
                {dataProps.nav.map((item, index, array) => {
                  return (
                    <S.NavItem key={index}>
                      <S.NavName>{item.name}</S.NavName>
                    </S.NavItem>
                  );
                })}
              </S.Nav>
            </S.NavWrapper>
          </S.Menu>
          <S.TopBanner isHome={false}>
            <S.Loc>{router.pathname.split("/")[1].toUpperCase()}</S.Loc>
          </S.TopBanner>
        </S.Container>
      )}
    </>
  );
}
