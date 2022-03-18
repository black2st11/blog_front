import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostTitle } from "../../components/organisms";
import * as S from './style'
export default function Post({ postData }) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <PostTitle {...postData} />
      </S.TitleWrapper>
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.fileContents }} />
      </article>
    </S.Container>
  );
}

export async function getServerSideProps() {
  const postData = await getPostData()
  return {
    props : {
      postData
    }
  }  
}
