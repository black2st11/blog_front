import * as S from "../../styles/me_style";
import { Status, Archiving } from "../../components/molecules";
import { MeAPI } from "../../api";
import { useEffect, useState } from "react";
import {hunter_data, skills_data, archivings_data} from './data'

export default function Me() {
  const [info, setInfo] = useState({})
  const [skills, setSkills] = useState({})
  const [archivings, setArchivings]= useState({})
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let res_data = await MeAPI.getData()
      res_data = res_data[0]
      setInfo({
        '이름': res_data.name,
        "이메일": res_data.email,
        "생년월일": res_data.birth,
        "학력": res_data.edu,
        "주소": res_data.address
      })
      setSkills(res_data.skills)
      setArchivings(res_data.archivings)
      setData(data);
      setIsLoading(false);
    })();
  }, [isLoading]);

  if (isLoading) {
    return null;
  }
  return (
    <S.Container>
      <S.InfoWrapper>
        <Status title="정보" data={info} />
        <Status title="기술" data={skills} />
      </S.InfoWrapper>
      <S.ArchivingWrapper>
        {archivings &&
          Object.entries(archivings).map(([key, value]) => (
            <Archiving title={key} list={value} />
          ))}
      </S.ArchivingWrapper>
    </S.Container>
  );
}
