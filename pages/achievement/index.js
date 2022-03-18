import * as S from "./style";
import { Achievement as Ach } from "../../components/molecules";
import useSWR from "swr";
import { useState } from "react";
import fetcher from "../../lib/fetch";
import Test1 from "../../public/images/Django.png";
import Test2 from "../../public/images/Next.png";
import axios from "axios";
const achievement = {
  name: "스케줄 관리 어플",
  duration: "2020-01-24 ~ 2020-04-20",
  position: "FullStack",
  img: [
    { src: Test1, alt: "Django" },
    { src: Test2, alt: "Next" },
  ],
  main_work: "스케줄 관리 어플을 맡으면서 하는 일",
  description: [
    "무한의 변경의 늪",
    "대화를 통한 해결점을 이루기 위해 노력",
    "힘들어서 그만",
  ],
};

export default function Achievement({ init }) {
  console.log(init);
  return (
    <S.Container>
      <S.Wrapper>
        {init.map((v, i, a) => (
          <Ach {...v} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

export async function getServerSideProps() {
  try {
    let res = await axios({
      url: "http://localhost:8000/achievement",
    });
    return {
      props: {
        init: res.data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        init: [achievement],
      },
    };
  }
}
