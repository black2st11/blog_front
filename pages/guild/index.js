import * as S from "../../styles/guild_style";
import { History } from "../../components/molecules";
import { GuiAPI } from "../../api";
import { useEffect, useState } from "react";
import { Container } from "../../components/atom";

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
      <S.Wrapper>
        <History list={data} />
      </S.Wrapper>
    </Container>
  );
}
