import * as S from "../../styles/dun_style";
import { Dungeon as Dun } from "../../components/molecules";
import { DunAPI } from "../../api";
import { useState, useEffect } from "react";
import { Container } from "../../components/atom";

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
    <Container>
      <S.Wrapper>
        {data && data.map((v, i, a) => <Dun key={i} {...v} />)}
      </S.Wrapper>
    </Container>
  );
}
