import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isDesktop &&
    `
  width : 33.333%;
  `}

  ${(props) => props.isPad && `width : 50%`};

  ${(props) => props.isPhone && `width : 100%`};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 14rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 50%;
`;

export const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 50%;
`;
