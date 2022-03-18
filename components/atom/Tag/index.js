import * as S from "./style";

const Tag = ({ list }) => {
  return (
    <S.Contaienr>
      {list.map((value, index, array) => {
        return <S.Item key={index}>{value.name ? value.name : value}</S.Item>;
      })}
    </S.Contaienr>
  );
};

export default Tag;
