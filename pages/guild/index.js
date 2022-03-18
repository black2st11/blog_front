import * as S from "./style";
import { History } from "../../components/molecules";
import useSWR from "swr";
import { useState } from "react";
import fetcher from "../../lib/fetch";
import axios from "axios";
const list = [
  {
    range: "2020.01.01 ~ 2020.02.01",
    duration: "2개월",
    title: "가명의 회사",
    tech: ["Django", "React", "Python"],
    position: "풀스택 개발자",
    work: "가명의 회사에서 연구원으로 일함",
    projectName: "스케줄 관리 어플",
    workList: [
      "cron 기반 정기 스케줄",
      "알림 기능",
      "해당하는 시간에 스케줄 이행 확인",
      "문자 인증",
    ],
  },
  {
    range: "2020.01.01 ~ 2020.02.01",
    duration: "2개월",
    title: "가명의 회사",
    tech: ["Django", "React", "Python"],
    position: "풀스택 개발자",
    work: "가명의 회사에서 연구원으로 일함",
    workList: [
      "cron 기반 정기 스케줄",
      "알림 기능",
      "해당하는 시간에 스케줄 이행 확인",
      "문자 인증",
    ],
  },
];

export default function Guild({ init }) {
  return (
    <S.Container>
      <S.Wrapper>
        <History list={init.data} total={init.total} />
      </S.Wrapper>
    </S.Container>
  );
}

export async function getServerSideProps() {
  try {
    let res = await axios({
      url: "http://localhost:8000/career",
    });
    return {
      props: {
        init: res.data,
      },
    };
  } catch (e) {
    return {
      props: {
        init: list,
      },
    };
  }
}
