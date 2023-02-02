import React from 'react'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import useVideo from './useVideo';
import Slider from '../../../components/Slider';
import { BsPlayCircle } from 'react-icons/bs';
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
`;
const SliderSection = styled.div`
  margin: 0 -4px;
`
const SliderItem = styled.div`
  padding: 0 4px;
  box-sizing: border-box;
  cursor: pointer;
`
const VideoLink = styled.a`
  color: rgb(0, 0, 0);
  text-decoration: none;
`;
const ThumbnailWrapper = styled.div`
    overflow: hidden;
    background: rgb(248, 248, 248);
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    position: relative;
    padding-bottom: 66.4615%;
`
const Thumbnail = styled.span<{ url: string }>`
  background-image: ${({url}) => url && `url(${url})`};
  display: inline-block;
  position: absolute;
  inset: 0px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 1;
  transition: all 300ms ease 0s;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,.4);
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;
const VideoTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 24px;
  padding: 4px;
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
  &:active, &:focus, &:hover {
    background-color: #fff;
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
  id: number;
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
const Video = ({id}:Props) => {
  const { data, isLoading, isError } = useVideo(id);
  return (
    <Base>
      <Title>Video</Title>
      <SliderSection>
        <Slider settings={sliderOptions} >
          {
            !isError && isLoading ? (<div>Loading...</div>) : (
              data?.map((video) => (
                <VideoLink
                  key={video.id}
                  href={`https://www.youtube.com/watch/${video.key}`}
                  target="_blank"
                >
                  <SliderItem>
                    <ThumbnailWrapper>
                      <Thumbnail url={`https://img.youtube.com/vi/${video.key}/0.jpg`}/>
                      <IconWrapper><BsPlayCircle /></IconWrapper>
                    </ThumbnailWrapper>
                  </SliderItem>
                  {/* <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name} /> */}
                  <VideoTitle>{video.name}</VideoTitle>
                </VideoLink>
              ))
            )
          }
        </Slider>
      </SliderSection>
    </Base>
  )
}

export default Video