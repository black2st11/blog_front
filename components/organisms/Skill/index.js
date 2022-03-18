import * as S from "./style";
import { SkillSet } from "../../molecules";

const Skill = ({ skills }) => {
  return (
    <S.Container>
      {skills ? (
        skills.map((item, index, array) => {
          return (
            <S.ItemWrapper key={index}>
              <SkillSet skill={item} />
            </S.ItemWrapper>
          );
        })
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default Skill;
