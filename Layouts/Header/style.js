import styled, { keyframes, css } from "styled-components";
import { colorPallete } from "../../styles/config";

const typing = keyframes`
  from {height : 0};
`;

const blink = keyframes`
  50% {border-color : transparent}
`;

const animation = props => css`
  ${typing} 3s steps(120);
`;

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  height: ${props => (props.isHome ? "100vh" : "auto")};
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${props => (props.isTop ? "transparent" : "#ffffff")};
  height: 4rem;
  box-shadow: ${props =>
    props.isTop ? "none" : "0 2px 4px 0 rgba(0, 0, 0, 0.2)"};
  z-index: 1;
`;

export const NavWrapper = styled.div`
  max-width: 65rem;
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.ul`
  display: flex;
  margin: auto 0 auto auto;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  margin: auto auto auto 1rem;
`;

export const Title = styled.h1`
  font-size: 2em;
  cursor: pointer;
  color: ${props => (props.isTop ? "white" : colorPallete.black)};
  font-weight: 600;
`;

export const NavItem = styled.li`
  margin: auto 0.5em auto 1em;
  cursor: pointer;
`;

export const NavName = styled.p`
  font-size: 1.5em;
  color: ${props => (props.isTop ? "white" : colorPallete.black)};
  font-weight: 600;
`;

export const TopBanner = styled.div`
  height: ${props => (props.isHome ? "100%" : "15rem")};
  background: ${colorPallete.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  max-width: 65rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  margin: 2em;
`;

export const Category = styled.p`
  color: white;
  font-size: 2em;
  font-weight: bold;
  margin: auto 0.25em;
  animation: ${animation};
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
  height: 1.25em;
  @media (max-width: 560px) {
    font-size: 1.25em;
  }
`;

export const Value = styled.span`
  color: white;
  font-size: 2em;
  font-weight: bold;
`;

export const Loc = styled.span`
  color: white;
  font-size: 2em;
  font-weight: bold;
  margin-top: 4rem;
`;

export const FixedMenu = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  width: 300px;
  z-index: 3;
  height: 100vh;
  display: none;
  background-color: white;
  @media (max-width: 560px) {
    display: block;
  }
`;

export const FixedButton = styled.div`
  display: none;
  margin-right: 2rem;
  @media (max-width: 560px) {
    display: block;
  }
`;
