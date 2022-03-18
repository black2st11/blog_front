import styled from "styled-components";

export const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(0 0 0 / 10%);
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  max-width: 65rem;
`;

export const Content = styled.ul``;

export const Item = styled.li`
  line-height: 2;
  ::before {
    content: "0";
    padding: 0 0.5rem 0 0;
  }
`;
