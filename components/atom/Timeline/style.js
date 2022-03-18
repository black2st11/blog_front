import styled from "styled-components";

export const Contaienr = styled.div`
  width: 90%;
`;

export const TimeLineLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 0.125rem;

  ::before {
    box-sizing: border-box;
  }

  ::after {
    box-sizing: border-box;
  }
`;

export const Label = styled.div`
  line-height: 1.5;
  padding-left: 0.25rem;
  border-left: 0.0625rem solid #d7e2eb;
  color: #b2c0cc;
  position : relative;
  :: after {
      content : '';
      position : absolute;
      left : -0.0625rem;
      top : calc(100% + 0.0625rem);
      height : 1.25rem;
      background-color #d7e2eb;
      width : 0.0625rem;
  }
`;

export const TimeLine = styled.div`
  display: grid;
  grid-template-column: repeat(96, 1fr);
  gird-auto-flow: column dense;
  grid-gap: 0.125rem;
  padding-top: 0.25rem;

  ::before {
    box-sizing: border-box;
  }

  ::after {
    box-sizing: border-box;
  }
`;

export const Title = styled.div`
  background-color: #7890a0;
  white-space: nowrap;
  z-index: 2;
  text-overflow: ellipsis;
  border-radius: 0.125rem;
  text-align: center;
  color: white;
  overflow: hidden;
`;
