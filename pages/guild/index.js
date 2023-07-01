import * as S from "../../styles/guild_style";
import { History } from "../../components/molecules";
import { GuiAPI } from "../../api";
import { useEffect, useState } from "react";
import { Container, Text } from "../../components/atom";
import { colorPallete } from "../../styles/config";

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
    <Container>
      <div style={{margin: '1rem 0'}}>
          <Text type='h4' style={{weight: 'bold', color: colorPallete.warn}}>
            현재까지의 기록
          </Text>
        </div>
      <S.Wrapper>
        <History list={data} />
      </S.Wrapper>
    </Container>
  );
}
