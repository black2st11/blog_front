import styled, { css } from "styled-components";
import { colorPallete } from "../../../styles/config";

const Base = css`
  color: ${(props) => (props.color ? props.color : colorPallete.black)};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
`;

export const H1 = styled.div`
  ${Base};
  font-size: 4rem;
`;

export const H2 = styled.div`
  ${Base};
  font-size: 3rem;
`;

export const H3 = styled.div`
  ${Base};
  font-size: 1.5rem;
`;

export const H4 = styled.div`
  ${Base};
  font-size: 1.25rem;
`;

export const P = styled.div`
  ${Base};
  font-size: 1rem;
`;
