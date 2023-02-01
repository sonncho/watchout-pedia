import React, {useState} from 'react'
import styled from '@emotion/styled/macro';
import {css} from '@emotion/react';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import Slider from '../../../components/Slider';
import useGallery from './useGallery'
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

const Base = styled.div`
  padding: 12px;
`;
const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 28px;
  margin: 8px 0px;
`
const SliderSection = styled.div`
  margin: 0 -4px;
`
const SliderItem = styled.div`
  padding: 0 4px;
  box-sizing: border-box;
  cursor: pointer;
`
const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background: rgb(248, 248, 248);
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding-bottom: 66.4615%;
`
const ImageBox = styled.span<{ url: string }>`
  background-image: ${({ url }) => `url(${url})`};
  display: inline-block;
  position: absolute;
  inset: 0px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 1;
  transition: all 300ms ease 0s;
`;
const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) => pos === 'left'
    ? css`left: 0; transform: translate(-50%, -50%);`
    : css`right: 0; transform: translate(50%, -50%);`};
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;
interface Props {
  id: string;
}
const sliderOptions = {
  dots: false,        // navigator사용여부
  arrows: true,       // 양옆 화살표 사용여부
  infinite: false,    // 반복 여부
  speed: 500,         // 넘어가는 속도 ms
  slidesToShow: 2.1,    // 슬라이드에 보여지는 갯수
  slidesToScroll: 2.1,  // 스크롤에 보여지는 갯수
  swipe: true,        // touch swipe사용 여부
  draggable: false,    // 마우스 drag 사용 여부
  prevArrow: (        // 왼쪽 화살표 아이콘 정의
    <ArrowButton pos='left'>
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (        // 오른쪽 화살표 아이콘 정의
    <ArrowButton pos='right'>
      <MdArrowForwardIos />
    </ArrowButton>
  )
}

const Gallery = ({ id }: Props) => {
  const [currentImage, setCurrentImage] = useState<string>('')
  const { data, isLoading } = useGallery(id);

  const handleClickImage = (path: string) => {
    const imageUrl = `${process.env.REACT_APP_IMAGE_ORIGINAL}/${path}`
    setCurrentImage(imageUrl);
  }
  const handleCloseModal = () => {
    setCurrentImage('');
  }

  return (
    <Base>
      <Title>갤러리</Title>
      {
        isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          <SliderSection>
            <Slider settings={sliderOptions}>
              {
                data?.map((image:any, idx:number) => (
                  <SliderItem key={idx} onClick={() => handleClickImage(image.file_path)}>
                    <ImageWrapper>
                      <ImageBox url={`${process.env.REACT_APP_IMAGE_PREFIX}/${image.file_path}`} />
                    </ImageWrapper>
                  </SliderItem>
                ))
              }
            </Slider>
            {
              currentImage && 
                <Lightbox key={currentImage} mainSrc={currentImage} onCloseRequest={handleCloseModal} />
            }
          </SliderSection>
        )
      }
    </Base>
  )
}

export default Gallery