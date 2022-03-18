import * as S from "./style";

const TimeLine = ({ list }) => {
  const label = ["2018", "2019", "2020", "2021", "2022", "2023"];
  return (
    <S.Contaienr>
      <S.TimeLineLabel>
        {label.map((value, index, array) => {
          return <S.Label key={index}>{value}</S.Label>;
        })}
      </S.TimeLineLabel>
      <S.TimeLine>
        <S.Title style={{ gridColumnStart: 1, gridColumnEnd: 0 }}>
          순천대학교
        </S.Title>
      </S.TimeLine>
    </S.Contaienr>
  );
};

export default TimeLine;
