import * as S from "../../styles/dun_style";
import { Dungeon as Dun } from "../../components/molecules";
import { DunAPI } from "../../api";
import { useState, useEffect } from "react";
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

export default function Dungeon() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await DunAPI.getData();
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.Wrapper>
        {data && data.map((v, i, a) => <Dun key={i} {...v} />)}
      </S.Wrapper>
    </S.Container>
  );
}
