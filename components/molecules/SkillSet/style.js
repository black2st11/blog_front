import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 1rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.is_phone ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  margin: 1rem;
`;
