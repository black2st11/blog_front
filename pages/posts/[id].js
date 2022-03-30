import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostTitle } from "../../components/organisms";
import * as S from "../../styles/post_style";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PostAPI, getPostFile } from "../../api";
export default function Post() {
  const [data, setData] = useState();
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    (async () => {
      let data = await PostAPI.getDetailData(id);
      let file_data = await getPostFile(data.file);
      setData(data);
      setFile(file_data);
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.TitleWrapper>
        <PostTitle {...data} />
      </S.TitleWrapper>
      <article>
        <div dangerouslySetInnerHTML={{ __html: file }} />
      </article>
    </S.Container>
  );
}
