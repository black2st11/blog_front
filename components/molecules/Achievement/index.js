import * as S from "./style";
import { Text } from "../../atom";
import Image from "next/image";
import { useState, useEffect } from "react";
import Slider from "react-slick";
const Achievement = ({
  attachs,
  name,
  position,
  start_date,
  end_date,
  descriptions,
  main_work,
}) => {
  const [scrollX, setScrollX] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", getCurrentScroll);
    setScrollX(window.innerWidth);

    return () => window.removeEventListener("resize", getCurrentScroll);
  }, []);

  let padWidth = 990;
  let phoneWidth = 1000;

  const getCurrentScroll = event => {
    setScrollX(window.innerWidth);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <S.Container is_phone={scrollX < phoneWidth}>
      <S.MainWrapper is_phone={scrollX < phoneWidth}>
        {attachs && (
          <S.ImgWrapper is_phone={scrollX < phoneWidth}>
            <Slider {...settings}>
              {attachs &&
                attachs.map((item, index, array) => (
                  <img
                    key={index}
                    src={item.file}
                    width={400}
                    height={300}
                    alt={item.name}
                  />
                ))}
            </Slider>
          </S.ImgWrapper>
        )}
        <S.AttrWrapper is_phone={scrollX < phoneWidth}>
          <S.ValueWrapper>
            <Text type="h2">{name}</Text>
          </S.ValueWrapper>
          <S.ValueWrapper>
            <Text type="h3">{start_date + "~" + end_date}</Text>
          </S.ValueWrapper>
          <S.ValueWrapper>
            <Text type="h3">{position}</Text>
          </S.ValueWrapper>
          <S.ValueWrapper>
            <Text type="h3">{main_work}</Text>
          </S.ValueWrapper>
        </S.AttrWrapper>
      </S.MainWrapper>
      <S.ContentWrapper>
        {descriptions &&
          descriptions.map((item, index, array) => (
            <S.Content key={index}>{item.content}</S.Content>
          ))}
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Achievement;
