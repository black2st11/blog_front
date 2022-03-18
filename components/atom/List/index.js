import * as S from "./style";

const List = ({ list }) => {
  return (
    <S.Contaienr>
      {list.map((item, index, array) => {
        return <S.li key={index}>{item}</S.li>;
      })}
    </S.Contaienr>
  );
};

export default List;
