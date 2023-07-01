import * as S from "../../styles/que_style";
import { Qna } from "../../components/molecules";
import { Container, Editor, Text } from "../../components/atom";
import { Pagination } from "antd";
import { useState, useEffect } from "react";
import { QueAPI } from "../../api";
import { colorPallete } from "../../styles/config";

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
    return data.map((v, i, a) => (
      <Qna key={i} question={v.content} answer={v.answers} />
    ));
  };

  const getData = async page => {
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
    <Container>
      <div style={{margin: '1rem 0'}}>
        <Text type='h4' style={{weight: 'bold', color: colorPallete.warn}}>
          궁금한 것을 적는 곳
        </Text>
      </div>
      <S.WarningWrapper>
        동일 IP 제한(하루 5개)
      </S.WarningWrapper>
      <Editor
        onChange={e => setText(e)}
        value={text}
        onSubmit={() => {
          handleSubmit();
        }}
      />
      <S.QuestionWrapper>{data && generator(data.results)}</S.QuestionWrapper>
      <S.PagingationWrapper>
        <Pagination
          current={page}
          total={data.count}
          defaultPageSize={5}
          onChange={(page, pageSize) => {
            getData(page);
          }}
        />
      </S.PagingationWrapper>
    </Container>
  );
};

export default Question;
