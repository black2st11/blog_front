import styled from "styled-components";
import { colorPallete } from "./config";

export const Outter = styled.div`
    width: 100%;
    padding: 5rem 0;
    background-color: ${colorPallete.white};
`

export const Inner = styled.div`
    width : 100%;
    max-width : 65rem;
    margin: auto;
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
  flex-direction: column;
`;
