import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";
import { useState, useEffect } from "react";
import { Menu } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
const { SubMenu } = Menu;

const siteTitle = "Moon Blog";
const dataProps = {
  title: "Moon Blog",
  nav: [
    {
      name: "스탯",
      link: "me",
    },
    {
      name: "던전",
      link: "dungeon",
    },
    {
      name: "길드",
      link: "guild",
    },
    {
      name: "업적",
      link: "achievement",
    },
    {
      name: "공략",
      link: "posts",
    },
    {
      name: "메시지",
      link: "question",
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
  const [collapse, setCollapse] = useState(true);
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
      {!collapse && (
        <S.FixedMenu>
          <Menu>
            {dataProps.nav.map((item, index, array) => (
              <Menu.Item key={index}>
                <Link href={item.link}>{item.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </S.FixedMenu>
      )}

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
                      <Link href={`/${item.link}`}>
                        <S.NavName>{item.name}</S.NavName>
                      </Link>
                    </S.NavItem>
                  );
                })}
              </S.Nav>
              <S.FixedButton>
                {collapse ? (
                  <AiOutlineMenuFold
                    size={25}
                    onClick={() => {
                      setCollapse(!collapse);
                    }}
                  />
                ) : (
                  <AiOutlineMenuUnfold
                    size={25}
                    onClick={() => {
                      setCollapse(!collapse);
                    }}
                  />
                )}
              </S.FixedButton>
            </S.NavWrapper>
          </S.Menu>
          <S.TopBanner isHome={true}>
            {dataProps.info.map((item, index, array) => {
              return (
                <S.ItemWrapper key={index}>
                  <S.Category active>
                    {item.category}.{item.value} <br />
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
              <Link href="/">
                <S.TitleWrapper>
                  <S.Title>{dataProps.title}</S.Title>
                </S.TitleWrapper>
              </Link>

              <S.Nav>
                {dataProps.nav.map((item, index, array) => {
                  return (
                    <S.NavItem key={index}>
                      <Link href={`/${item.link}`}>
                        <S.NavName>{item.name}</S.NavName>
                      </Link>
                    </S.NavItem>
                  );
                })}
              </S.Nav>
            </S.NavWrapper>
            <S.FixedButton>
              {collapse ? (
                <AiOutlineMenuFold
                  size={25}
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                />
              ) : (
                <AiOutlineMenuUnfold
                  size={25}
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                />
              )}
            </S.FixedButton>
          </S.Menu>
          <S.TopBanner isHome={false}>
            <S.Loc>{router.pathname.split("/")[1].toUpperCase()}</S.Loc>
          </S.TopBanner>
        </S.Container>
      )}
    </>
  );
}
