import * as S from "./style";

const List = ({ list }) => {
  console.log(list)
  return (
    <S.Contaienr>
      {list.map((item, index, array) => {
        return <S.li key={index}>{item.content}</S.li>;
      })}
    </S.Contaienr>
  );
};

export default List;
