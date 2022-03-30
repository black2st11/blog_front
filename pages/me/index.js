import * as S from "../../styles/me_style";
import { Skill, Info, Archives } from "../../components/organisms";
import { Text } from "../../components/atom";
import { Status, Archiving } from "../../components/molecules";
import axios from "axios";
import { MeAPI } from "../../api";
import { useEffect, useState } from "react";
export default function Me() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let data = await MeAPI.getData();
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
        <Status title="정보" list={data.me.info} />
        <Status title="기술" list={data.me.skill} />
      </S.InfoWrapper>
      <S.ArchivingWrapper>
        {data.archiving &&
          data.archiving.map((v, i, a) => (
            <Archiving key={i} title={v.category} list={v.description} />
          ))}
      </S.ArchivingWrapper>
    </S.Container>
  );
}
