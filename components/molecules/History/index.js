import * as S from "./style";
import { Text, Tag, List } from "../../atom";
import { useState, useEffect } from "react";

const History = ({ list, total }) => {
  const [scrollX, setScrollX] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", getCurrentScroll);
    setScrollX(window.innerWidth);

    return () => window.removeEventListener("resize", getCurrentScroll);
  }, []);

  let padWidth = 990;
  let phoneWidth = 820;

  const getCurrentScroll = (event) => {
    setScrollX(window.innerWidth);
  };
  console.log(list);
  return (
    <S.Container is_phone={scrollX < phoneWidth}>
      <S.TitleWrapper>
        <Text type="h4">길드</Text>
        <S.FullDuration>
          <Text type="h4">총 기간 : 약 {total}개월</Text>
        </S.FullDuration>
      </S.TitleWrapper>
      <S.ItemContainer>
        {list &&
          list.map((item, index, array) => {
            return (
              <S.ItemWrapper key={index} is_phone={scrollX < phoneWidth}>
                <S.RangeWrapper>
                  <Text type="h4">{`${item.start_date} ~ ${item.end_date}`}</Text>
                  <S.DurationWrapper>
                    <Text type="h4">{item.duration}개월</Text>
                  </S.DurationWrapper>
                </S.RangeWrapper>
                <S.DetailWrapper is_phone={scrollX < phoneWidth}>
                  <S.ItemTitleWrapper>
                    <Text type="h4">{item.name}</Text>
                  </S.ItemTitleWrapper>
                  <S.PositionWrapper>
                    <Text>{item.position}</Text>
                  </S.PositionWrapper>
                  <Tag list={item.skill} />
                  <S.WorkWrapper>
                    <Text>{item.work}</Text>
                  </S.WorkWrapper>
                  <S.WorkWrapper>
                    <Text>{item.achievement && item.achievement.name}</Text>
                  </S.WorkWrapper>
                  <List list={item.description} />
                </S.DetailWrapper>
              </S.ItemWrapper>
            );
          })}
      </S.ItemContainer>
    </S.Container>
  );
};

export default History;
