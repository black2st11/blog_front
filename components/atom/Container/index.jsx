import styled from "styled-components";
import { colorPallete, viewSize } from "../../../styles/config";

const OuterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.bgColor};
    min-height: 64.5vh;
`;

const InnerContainer = styled.div`
    max-width: ${viewSize.container};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const Container = ({ children, bgColor = colorPallete.white }) => {
  return (
    <OuterContainer bgColor={bgColor}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default Container;
