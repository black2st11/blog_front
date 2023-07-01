import * as S from "../../styles/ach_style";
import { Achievement as Ach } from "../../components/molecules";
import { useState, useEffect } from "react";
import { AchAPI } from "../../api";
import { Container, Text } from "../../components/atom";
import { colorPallete } from "../../styles/config";
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
      <div style={{margin: '1rem 0'}}>
          <Text type='h4' style={{weight: 'bold', color: colorPallete.warn}}>
            나름 유의미한 일을 했다고 생각한 순간
          </Text>
        </div>
      <S.Wrapper>
        {data.map((v, i, a) => (
          <Ach key={i} {...v} />
        ))}
      </S.Wrapper>
    </Container>
  );
}
