import * as S from "../../styles/ach_style";
import { Achievement as Ach } from "../../components/molecules";
import { useState, useEffect } from "react";
import { AchAPI } from "../../api";
import { Container } from "../../components/atom";
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
    <Container>
      <S.Wrapper>
        {data.map((v, i, a) => (
          <Ach key={i} {...v} />
        ))}
      </S.Wrapper>
    </Container>
  );
}
