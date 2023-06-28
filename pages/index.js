import { Achievement, Dungeon, History, Status } from "../components/molecules";
import * as S from "../styles/main_style";
import { HomeAPI, MeAPI } from "../api";
import { useState, useEffect } from "react";

// TODO 메인페이지 구성 변경 필요
export default function Home() {
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});
  const [skills, setSkills] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let res_data = await MeAPI.getData();
      res_data = res_data[0];
      setInfo({
        이름: res_data.name,
        이메일: res_data.email,
        생년월일: res_data.birth,
        학력: res_data.edu,
        주소: res_data.address,
      });
      setSkills(res_data.skills);

      setData(res_data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.InfoWrapper>
        <Status title="정보" list={info} />
        <Status title="스킬" list={skills} />
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
