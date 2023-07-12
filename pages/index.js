import styled from "styled-components";

import * as S from "../styles/main_style";
import {dataProps} from '../data/home'
import { colorPallete, fontSize, fontWeight } from "../styles/config";
// TODO 메인페이지 구성 변경 필요

const IntroWrapper = styled.div`
  margin-bottom: 10rem;
`

const Title = styled.div`
  color: ${colorPallete.black};
  font-size: ${fontSize.XXLARGE};
  font-weight: ${fontWeight.BOLD};
`
const Description = styled.div`
  color: ${colorPallete.black};
  font-size: ${fontSize.LARGE};
  font-weight: ${fontWeight.MEDIUM};
  margin: 1rem auto;
  line-height: 5rem;
`

export default function Home() {
  return (
    <S.Outter>
      <S.Inner>
      </S.Inner>
    </S.Outter>
  );
}
