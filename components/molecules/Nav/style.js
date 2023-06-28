import styled from "styled-components";
import {
  colorPallete,
  viewSize,
  fontSize,
  fontWeight,
} from "../../../styles/config";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: ${props =>
      props.isTop ? "transparent" : colorPallete.white};
    height: 4rem;
    box-shadow: ${props =>
      props.isTop ? "none" : "0 2px 4px 0 rgba(0, 0, 0, 0.2)"};
    z-index: 1;
`;

export const Wrapper = styled.div`
    max-width: ${viewSize.container};
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    margin: auto auto auto 1rem;
`;

export const Title = styled.h1`
    font-size: ${fontSize.XLARGE};
    cursor: pointer;
    color: ${props => (props.isTop ? colorPallete.white : colorPallete.black)};
    font-weight: ${fontWeight.MEDIUM};
`;

export const Nav = styled.ul`
  display: flex;
  margin: auto 0 auto auto;

  @media (max-width: ${viewSize.mobile}) {
    display: none;
  }
`;

export const NavItem = styled.li`
    margin: auto 0.5em auto 1em;
    cursor: pointer;
`;

export const NavName = styled.p`
    font-size: ${fontSize.NORMAL};
    color: ${props => (props.isTop ? colorPallete.white : colorPallete.black)};
    font-weight: ${fontWeight.MEDIUM};
`;

export const FixedButton = styled.div`
  display: none;
  margin-right: 2rem;
  color: ${colorPallete.white};
  @media (max-width: ${viewSize.mobile}) {
    display: block;
  }
`;

export const FixedMenu = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  width: 300px;
  z-index: 3;
  height: 100vh;
  display: none;
  background-color: ${colorPallete.white};
  @media (max-width: ${viewSize.mobile}) {
    display: block;
  }
`;
