import React from "react";
import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Menu } from "antd";

import * as S from "./style";

const Nav = ({ isTop, title, menus = [] }) => {
  const [collapse, setCollapse] = React.useState(true);

  const iconProps = {
    size: 25,
    onClick: () => {
      setCollapse(!collapse);
    },
  };

  return (
    <>
      {!collapse && (
        <S.FixedMenu>
          <Menu>
            {menus.map((item, index) => (
              <Menu.Item key={index} onClick={() => setCollapse(!collapse)}>
                <Link href={item.link}>{item.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </S.FixedMenu>
      )}
      <S.Container isTop={isTop}>
        <S.Wrapper>
          <Link href={"/"}>
            <S.TitleWrapper>
              <S.Title isTop={isTop}>{title}</S.Title>
            </S.TitleWrapper>
          </Link>

          <S.Nav>
            {menus.map((item, index) => {
              return (
                <S.NavItem key={index}>
                  <Link href={`/${item.link}`}>
                    <S.NavName isTop={isTop}>{item.name}</S.NavName>
                  </Link>
                </S.NavItem>
              );
            })}
          </S.Nav>
          <S.FixedButton>
            {collapse ? (
              <AiOutlineMenuFold {...iconProps} />
            ) : (
              <AiOutlineMenuUnfold {...iconProps} />
            )}
          </S.FixedButton>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Nav;
