import { Table, Tag } from "antd";
import Link from 'next/link'
import useSWR from "swr";
import {useEffect , useState} from 'react'
import {getAllPostIds} from '../../lib/posts'
import * as S from './style'
import fetcher from '../../lib/fetch'
import axios from 'axios'
export async function getServerSideProps() {
  let res = await axios({
    url : 'http://localhost:8000/post'
  })

  return {
    props : {
      temp : res.data
    }
  }
}

const manage = (data) => {
  let temp = []
  data.map((v, i, a) =>{
    temp.push({
      title : {
        name : v.title,
        id : v.id
      },
      created_at : v.created_at,
      tag : v.tag
    })
  })
  return temp
}

const Posts = ({temp}) => {
  const [pageIndex, setPageIndex] = useState(1)
  const  {data, error} = useSWR(`/post?page=${pageIndex}`, fetcher)
  const colums = [
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      render : title => {
        return (<Link href={`posts/${title.id}`}>{title.name}</Link>)
      }
    },
    {
      title: "날짜",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title : "태그",
      key : 'tag',
      dataIndex : 'tag',
      render : tag => (
        <>
        {tag.map((v, i , a)=>{
          return (
            <Tag color='success' key={i}>{v.name}</Tag>
          )
        })}
        </>
      )
    }
    
  ];

  const dataSource = data ? manage(data) : manage(temp)
  return (<S.Container>
    <Table loading={false} pagination={{current : pageIndex, pageSize : 10, total : 100}} dataSource={dataSource} columns={colums} onChange={(pagination, filters, sorter)=>{setPageIndex(pagination.current)}} />
  </S.Container> );
};



export default Posts;
