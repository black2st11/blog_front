import styled from "styled-components";

export const Container = styled.div`
  border: 0.0625rem solid #d7e2eb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: ${props => (props.is_phone ? "30rem" : "50rem")};
  background-color:white;
  margin: 1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgb(0 0 0 / 10%);
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FullDuration = styled.div`
  margin: auto 0 auto auto;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 0.0625rem solid #d7e2eb;
  padding: 1.5rem 0;
  flex-direction ${props => (props.is_phone ? "column" : "row")};
  &: last-child {
    border-bottom: none;
  }
`;

export const RangeWrapper = styled.div`
  margin-right: 5rem;
`;
export const DurationWrapper = styled.div`
  margin-top: 1rem;
`;

export const ItemTitleWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const PositionWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const WorkWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const DetailWrapper = styled.div`
  margin: ${props => (props.is_phone ? "1rem 0" : "none")};
`;

export const Divider = styled.div``;
