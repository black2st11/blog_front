import * as S from "./style";
import { Qna } from "../../components/molecules";
import { Pagination } from "antd";
import useSWR from "swr";
import { useState } from "react";
import fetcher from "../../lib/fetch";
import axios from "axios";
const Question = ({ init }) => {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(`/question?page=${page}`, fetcher);

  const generator = (data = {}) => {
    if (data == {}) {
      return <></>;
    }
    return data.data.map((v, i, a) => (
      <Qna question={v.content} answer={v.answers} />
    ));
  };
  return (
    <S.Container>
      <S.WarningWrapper>
        여기에 이상한 말을 쓸 경우 삭제됩니다.
      </S.WarningWrapper>
      <S.QuestionWrapper>
        {data ? generator(data) : generator(init)}
      </S.QuestionWrapper>
      <S.PagingationWrapper>
        <Pagination
          current={page}
          total={init.total_count}
          defaultPageSize={5}
          onChange={(page, pageSize) => setPage(page)}
        />
      </S.PagingationWrapper>
    </S.Container>
  );
};

export async function getServerSideProps() {
  try {
    let res = await axios({
      url: "http://localhost:8000/question",
    });
    console.log(res);
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

export default Question;
