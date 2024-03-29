import styled from "styled-components";
import { viewSize } from "./config";

export const Container = styled.div`
  width: 100%;
  max-width: ${viewSize.container};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
