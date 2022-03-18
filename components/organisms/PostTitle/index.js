import * as S from './style'
import {Tag} from 'antd'
const PostTitle = ({title, tag , created_at}) => {
    return (
        <S.Container>
            <S.TitleWrapper>
                {title}
            </S.TitleWrapper>
            <S.TagWrapper>
                {tag && tag.map((v, i, a )=>{
                    return (
                        <Tag color='#444' key={i}>{v.name}</Tag>
                    )
                })}
            </S.TagWrapper>
            <S.DateWrapper>
                {created_at}
            </S.DateWrapper>
        </S.Container>
    )
}

export default PostTitle