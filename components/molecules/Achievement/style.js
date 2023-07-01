import styled from "styled-components";
import { viewSize } from "../../../styles/config";

export const Container = styled.div`
  background-color: white;
  margin: 1rem;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(0 0 0 / 10%);
  width: 100%;
  max-width: 60rem;
  
  @media screen and (max-width: ${viewSize.tablet}){
    max-width: 30rem;
  }

  @media screen and (max-width: ${viewSize.mobile}){
    max-width: 20rem;
  }
`;

export const ImgWrapper = styled.div`
  text-align: center;
  width: ${props => (props.is_phone ? "100%" : "50%")};
  margin: 1rem 0;
`;

export const AttrWrapper = styled.div`
  margin: 1rem;
`;

export const ValueWrapper = styled.div`
  margin: 1rem auto;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.is_phone ? "column" : "row")};
`;

export const ContentWrapper = styled.ul`
  margin: 1rem;
`;

export const Content = styled.li`
  line-height: 2;
  padding: 0 0 0 1rem;
  white-space: pre-line;
  :: marker {
    content: "◼️";
  }
`;
