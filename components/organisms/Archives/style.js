import styled from "styled-components";

export const Container = styled.div`
  max-width: 65rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.is_phone ? "column" : "row")};
`;

export const ItemWrapper = styled.div`
  margin: 1rem;
  width: 50%;
`;
