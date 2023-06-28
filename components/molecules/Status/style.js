import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(0 0 0 / 10%);
  background-color: white;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
`;

export const ItemWrapper = styled.div`
  display: flex;
  border: 0.0625rem solid #d7e2eb;
  padding: 1rem 0;
  border-top: none;
  &: last-child {
    border-radius: 0 0 1rem 1rem;
  }
`;

export const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  min-width: 5rem;
  position: relative;
  height: 3rem;
  text-align: center;

  ::before {
    content: "";
    left: 5rem;
    border-right: 0.0625rem solid #d7e2eb;
    height: 3rem;
    position: absolute;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  padding-right: 1rem;
`;
