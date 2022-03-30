import * as S from "../../styles/guild_style";
import { History } from "../../components/molecules";
import { GuiAPI } from "../../api";
import { useEffect, useState } from "react";
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

export default function Guild() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await GuiAPI.getData();
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
        <History list={data.data} total={data.total} />
      </S.Wrapper>
    </S.Container>
  );
}
