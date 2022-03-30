import * as S from "../../styles/ach_style";
import { Achievement as Ach } from "../../components/molecules";
import { useState, useEffect } from "react";
import Test1 from "../../public/images/Django.png";
import Test2 from "../../public/images/Next.png";
import { AchAPI } from "../../api";
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

export default function Achievement() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await AchAPI.getData();
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
        {data.map((v, i, a) => (
          <Ach key={i} {...v} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
