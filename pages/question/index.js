import * as S from "../../styles/que_style";
import { Qna } from "../../components/molecules";
import { Editor } from "../../components/atom";
import { Pagination } from "antd";
import { useState, useEffect } from "react";
import { QueAPI } from "../../api";

const Question = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      let data = await QueAPI.getData(1);
      setData(data);
      setIsLoading(false);
    })();
  }, []);
  const generator = (data = []) => {
    if (data == {}) {
      return <></>;
    }
    return data.data.map((v, i, a) => (
      <Qna key={i} question={v.content} answer={v.answers} />
    ));
  };

  const getData = async (page) => {
    setPage(page);
    let data = await QueAPI.getData(page);
    setData(data);
  };

  const handleSubmit = async () => {
    let data = await QueAPI.postData({ content: text });
    if (data) {
      alert("등록 완료");
    } else {
      alert("등록 실패했습니다. 하루 5회 초과한 댓글은 작성할 수 없습니다.");
    }
    getData();
  };

  if (isLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.WarningWrapper>
        여기에 이상한 말을 쓸 경우 삭제됩니다.
      </S.WarningWrapper>
      <Editor
        onChange={(e) => setText(e)}
        value={text}
        onSubmit={() => {
          handleSubmit();
        }}
      />
      <S.QuestionWrapper>{data && generator(data)}</S.QuestionWrapper>
      <S.PagingationWrapper>
        <Pagination
          current={page}
          total={data.total_count}
          defaultPageSize={5}
          onChange={(page, pageSize) => {
            getData(page);
          }}
        />
      </S.PagingationWrapper>
    </S.Container>
  );
};

export default Question;
