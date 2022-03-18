import * as S from "./style";
import { Dungeon as Dun } from "../../components/molecules";
import useSWR from "swr";
import { useState } from "react";
import fetcher from "../../lib/fetch";
import axios from "axios";
const defaultFormat = {
  name: "데이터가 서버에서 안내려오는 던전",
  duration: "지금",
  difficulty: "5",
  size: "1명",
  loc: "지금 당신의 브라우저",
  description: ["지금 이걸 보고있는 당신은 현재 실시간으로 겪는 중"],
  skill: [],
  final: "조만간 고칠 것 같습니다.",
};

export default function Dungeon({ init }) {
  return (
    <S.Container>
      <S.Wrapper>{init && init.map((v, i, a) => <Dun {...v} />)}</S.Wrapper>
    </S.Container>
  );
}

export async function getServerSideProps() {
  try {
    let res = await axios({
      url: "http://localhost:8000/dungeon",
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
        init: [defaultFormat],
      },
    };
  }
}
