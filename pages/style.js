import styled from "styled-components";

export const Container = styled.div`
    width : 100%:
    max-width : 65rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HistoryWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DungeonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; ;
`;

export const AchieveWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
