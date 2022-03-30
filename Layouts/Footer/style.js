import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-directon: column;
  background-color: #333;
  width: 100%;
  height: 15rem;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5em;
`;

export const TitleWrapper = styled.div`
  margin: 1rem 0;
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const InfoWrapper = styled.div`
  margin: 1rem 0;
`;

export const Info = styled.h2`
  color: white;
  font-size: 16px;
`;

export const LogoWrapper = styled.div`
  margin: 0 0 0 1rem;
`;
