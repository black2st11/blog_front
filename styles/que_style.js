import styled from "styled-components";
import { colorPallete } from "./config";

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;
`;

export const WarningWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${colorPallete.warn};
`;

export const QuestionWrapper = styled.div`
  min-height: 30rem;
  width: 100%;
`;

export const PagingationWrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
  text-align: center;
`;
