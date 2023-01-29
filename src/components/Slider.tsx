import React from 'react';
import ReactSlider, { Settings } from "react-slick";
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

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

const DEFAULT_SETTINGS: Settings = {
  dots: false,        // navigator사용여부
  arrows: true,       // 양옆 화살표 사용여부
  infinite: false,    // 반복 여부
  speed: 500,         // 넘어가는 속도 ms
  slidesToShow: 5,    // 슬라이드에 보여지는 갯수
  slidesToScroll: 5,  // 스크롤에 보여지는 갯수
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

interface Props {
  settings?: Settings;
  children: React.ReactNode;
}

const Slider:React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {
  return (
    <ReactSlider {...settings}>
      {children}
    </ReactSlider>
  )
}

export default Slider