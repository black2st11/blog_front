import { Achievement, Dungeon, History, Status } from "../components/molecules";
import * as S from "./style";
import axios from "axios";
export default function Home({ init }) {
  console.log(init);
  return (
    <S.Container>
      <S.InfoWrapper>
        <Status title="정보" list={init.me.info} />
        <Status title="스킬" list={init.me.skill} />
      </S.InfoWrapper>
      <S.HistoryWrapper>
        <History total={0} list={init.career} />
      </S.HistoryWrapper>
      <S.DungeonWrapper>
        {init.dungeon && init.dungeon.map((v, i, a) => <Dungeon {...v} />)}
      </S.DungeonWrapper>
      <S.AchieveWrapper>
        {init.achieve && init.achieve.map((v, i, a) => <Achievement {...v} />)}
      </S.AchieveWrapper>
    </S.Container>
  );
}

export async function getServerSideProps() {
  try {
    let res = await axios({
      url: "http://localhost:8000/main",
    });
    console.log(res);
    return {
      props: {
        init: res.data,
      },
    };
  } catch (e) {
    return {
      props: {
        init: {},
      },
    };
  }
}
