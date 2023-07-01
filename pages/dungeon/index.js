import * as S from "../../styles/dun_style";
import { Dungeon as Dun } from "../../components/molecules";
import { DunAPI } from "../../api";
import { useState, useEffect } from "react";
import { Container, Text } from "../../components/atom";
import { colorPallete } from "../../styles/config";

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
      <div style={{margin: '1rem 0'}}>
          <Text type='h4' style={{weight: 'bold', color: colorPallete.warn}}>
            여태까지 겪었던 일 중 좋던 슬프던 기억에 남는 순간
          </Text>
        </div>
      <S.Wrapper>
        {data && data.map((v, i, a) => <Dun key={i} {...v} />)}
      </S.Wrapper>
    </Container>
  );
}
