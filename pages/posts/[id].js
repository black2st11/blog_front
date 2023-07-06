import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostTitle } from "../../components/organisms";
import * as S from "../../styles/post_style";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PostAPI, getPostFile } from "../../api";
import { Container } from "../../components/atom";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic( () => import('react-quill'), {
    ssr : false
})
import 'react-quill/dist/quill.bubble.css'


export default function Post() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    (async () => {
      let data = await PostAPI.getDetailData(id);
      try{
        const obj = JSON.parse(data.content)
        data.content = obj.html
      }catch(err){}
      setData(data);
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <S.TitleWrapper>
        <PostTitle {...data} />
      </S.TitleWrapper>
      <div style={{width: '100%'}}>
        <ReactQuill theme="bubble" value={data.content} readOnly={true} />
      </div>
    </Container>
  );
}
