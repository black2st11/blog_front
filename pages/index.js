import { Achievement, Dungeon, History, Status } from "../components/molecules";
import * as S from "../styles/main_style";
import { HomeAPI } from "../api";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await HomeAPI.getData();
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.InfoWrapper>
        {/* <Status title="정보" list={data.me.info} />
        <Status title="스킬" list={data.me.skill} /> */}
      </S.InfoWrapper>
      <S.HistoryWrapper>
        <History total={0} list={data.career} />
      </S.HistoryWrapper>
      <S.DungeonWrapper>
        {data.dungeon &&
          data.dungeon.map((v, i, a) => <Dungeon key={i} {...v} />)}
      </S.DungeonWrapper>
      <S.AchieveWrapper>
        {data.achieve &&
          data.achieve.map((v, i, a) => <Achievement key={i} {...v} />)}
      </S.AchieveWrapper>
    </S.Container>
  );
}
