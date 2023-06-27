import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  max-width: 60rem;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: start;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ArchivingWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 60rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  flex-wrap: wrap;
`;
