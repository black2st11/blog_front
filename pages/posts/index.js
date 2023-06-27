import { Table, Tag } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "../../styles/post_style";
import { PostAPI } from "../../api";
import Date from "../../utils/date";
const manage = (data) => {
  let temp = [];
  data.map((v, i, a) => {
    temp.push({
      title: {
        name: v.title,
        id: v.id,
      },
      created: v.created,
      tags: v.tags,
    });
  });
  return temp;
};

const Posts = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await PostAPI.getData(1);
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  const getData = async (pageIndex) => {
    setPage(pageIndex);
    let next_data = await PostAPI.getData(pageIndex);
    setData(next_data);
  };
  const colums = [
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
      render: (title) => {
        return <Link href={`posts/${title.id}`}>{title.name}</Link>;
      },
    },
    {
      title: "날짜",
      dataIndex: "created",
      key: "created",
      render: (created) => {
        return <>{Date({ dateString: created })}</>;
      },
    },
    {
      title: "태그",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((v, i, a) => {
            return (
              <Tag color="success" key={i}>
                {v.name}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  if (isLoading) {
    return null;
  }
  const dataSource = manage(data);
  return (
    <S.Container>
      <Table
        loading={false}
        pagination={{ current: page, pageSize: 10, total: data.total }}
        dataSource={dataSource}
        columns={colums}
        onChange={(pagination, filters, sorter) => {
          getData(pagination.current);
        }}
      />
    </S.Container>
  );
};

export default Posts;
