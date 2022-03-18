import * as S from "./style";
import { Skill, Info, Archives } from "../../components/organisms";
import { Text } from "../../components/atom";
import data from "./data";
import { Status, Archiving } from "../../components/molecules";
import axios from "axios";
export default function Me({ init }) {
  console.log(init);
  return (
    <S.Container>
      <S.InfoWrapper>
        <Status title="정보" list={init.me.info} />
        <Status title="기술" list={init.me.skill} />
      </S.InfoWrapper>
      <S.ArchivingWrapper>
        {init.archiving &&
          init.archiving.map((v, i, a) => (
            <Archiving title={v.category} list={v.description} />
          ))}
      </S.ArchivingWrapper>
    </S.Container>
  );
}
export async function getServerSideProps() {
  try {
    let res = await axios({
      url: "http://localhost:8000/me",
    });
    return {
      props: {
        init: res.data,
      },
    };
  } catch (e) {
    return {
      props: {
        init: {},
      },
    };
  }
}
