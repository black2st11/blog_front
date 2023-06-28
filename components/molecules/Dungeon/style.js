import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(0 0 0 / 10%);
  max-width: 20rem;
  margin: 1rem;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 1rem;
  border: 0.0625rem solid #d7e2eb;
`;

export const GradeWrapper = styled.div`
  margin: auto 1rem auto auto;
`;

export const KeyWrapper = styled.div`
  border: 0.0625rem solid #d7e2eb;
  padding: 0.5rem;
`;

export const ValueWrapper = styled.div`
  margin: auto auto auto 1rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;
`;

export const ContentWrapper = styled.ul`
  margin: 1rem;
`;

export const Content = styled.li`
  line-height: 2;
  padding: 0 0 0 1rem;

  :: marker {
    content: "◼️";
  }
`;

export const FinalWrapper = styled.div`
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
`;
