import { Comment, Avatar } from "antd";
import * as S from "./style";
import MoonAvatar from "../../../public/images/MoonAvatar.png";
const Question = ({ content, children }) => (
  <Comment
    author="Question"
    avatar={
      <Avatar src={"https://joeschmoe.io/api/v1/random"} alt="question" />
    }
    content={content}
  >
    {children}
  </Comment>
);

const Answer = ({ content }) => (
  <Comment
    author="Answer"
    avatar={<Avatar src={MoonAvatar} alt="answer" />}
    content={content}
  />
);

const Qna = ({ question, answer }) => {
  return (
    <S.Container>
      <Question content={question}>
        {answer && answer.map((v, i, a) => <Answer content={v.content} />)}
      </Question>
    </S.Container>
  );
};

export default Qna;
