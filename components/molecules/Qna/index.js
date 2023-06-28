import { Comment, Avatar } from "antd";
import * as S from "./style";
import MoonAvatar from "../../../public/images/MoonAvatar.png";
const Question = ({ content, children }) => (
  <Comment
    author="Question"
    
    content={content}
  >
    {children}
  </Comment>
);

const Answer = ({ content }) => (
  <Comment
    author="Answer"
    content={content}
  />
);

const Qna = ({ question, answer }) => {
  return (
    <S.Container>
      <Question content={question}>
        {answer &&
          answer.map((v, i, a) => <Answer key={i} content={v.content} />)}
      </Question>
    </S.Container>
  );
};

export default Qna;
