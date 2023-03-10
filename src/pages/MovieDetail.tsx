import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import useMovieDetail from '../features/movie/useMovieDetail';

import { FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { MdEdit, MdStar } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai'; 
import { Rating } from '@mui/material';
import DefaultInfo from '../features/movie/detail/DefaultInfo';
import Similar from '../features/movie/detail/Similar';
import Gallery from '../features/movie/detail/Gallery';
import Video from '../features/movie/detail/Video';

const Base = styled.div`
  position: relative;
  background: #f8f8f8;
`;

const TopInfo = styled.section`
  border-bottom: 1px solid rgb(227, 227, 227);
  background: rgb(255, 255, 255);
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  display: flex;
  width: 100%;
  height: 394px;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.35) 2%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.5) 100%);
  overflow: hidden;
`;

const LeftBlur = styled.div`
  flex: 1 1 0%;
  background: rgb(178, 196, 229);
`;

const RightBlur = styled.div`
  flex: 1 1 0%;
  background: rgb(184, 184, 184);
`;

const LeftGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-90deg, rgba(178, 196, 229, 0) 0%, rgb(178, 196, 229) 100%);
`;

const RightGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(90deg, rgba(184, 184, 184, 0) 0%, rgb(184, 184, 184) 100%);
`;

const BackdropImage = styled.div<{ imageUrl: string }>`
  background: url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
  width: 768px;
  position: relative;
  top: auto;
  left: auto;
  height: 100%;
  filter: none;
`;

const PosterWrapper = styled.div`
  position: absolute;
  width: 166px;
  height: 238px;
  border: solid 2px #fff;
  top: -48px;
  left: 0;
  border-radius: 3px;
  box-shadow: 0 0 2px rgb(0 0 0 / 30%);
  background: #fff;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Main = styled.div`
  padding: 14px 16px 22px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: 0px 0px 0px 191px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 33px;
  font-weight: 700;
  line-height: 40px;
`;

const Keyword = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 4px;
  color: rgba(0,0,0,0.5);
`;

const AverageRate = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 0;
  margin-top: 14px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
`;

const Actions = styled.div`
  margin-top: 20px;
  height: 58px;
  display: flex;
  align-items: center;
`;

const StarRate = styled.div`
  width: 238px;
  height: 57px;
  margin: 0;
  text-align: center;
`;

const StarRateText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #787878;
`;

const RatingWrapper = styled.div`
  margin-top: 8px;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #ededed;
  float: left;
`;
const DividerLine =styled.div`
  padding: 0 12px;
  box-sizing: border-box;
  margin: 0 12px;
  border-bottom: 1px solid #ededed;
  
`
const ActionButtonContainer = styled.div`
  width: 461px;
  padding: 0 30px;
  margin: 0 -16px;
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  color: rgb(41, 42, 50);
  margin: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    > svg {
      transform: scale(1.4);
    }
  }
  > svg {
    margin-right: 7px;
    font-size: 24px;
    transition: all 300ms ease 0s;
  }
`;

const BottomInfo = styled.div`
  padding: 28px 0 48px;
  max-width: 960px;
  margin: 0 auto;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
`;

const ContentSectionContainer = styled.div`
  @media (min-width: 1023px) {
    &:first-of-type {
      float: left;
      width: 620px;
    }
    &:last-child {
      float: right;
      width: 318px;
    }
  }
  @media (max-width: 719px) {
    &:first-of-type {
      float: left;
      width: 100%;
    }
    &:last-child {
      float: left;
      width: 100%;
    }
  }
  border-right: 1px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #fff;
  border-color: #e3e3e3;
`;
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FCD86A',
  },
});

const MovieDetail = () => {
  const { id } = useParams() as { id: string };
  const { data, isLoading } = useMovieDetail(id ?? '');
  console.dir(data);

  const year = useMemo(() => {
    return data?.release_date.split('-')[0] || ''
  }, [data])

  const genres = useMemo(() => {
    return data?.genres.map((genre) => genre.name).join('/') || ''
  }, [data])

  return (
    <Base>
      <>
        {
          isLoading || !data ? (<div>Loading...</div>) : (
            <>
              <TopInfo>
                <PosterContainer>
                  <Backdrop>
                    <LeftBlur />
                    <BackdropImage imageUrl={`${process.env.REACT_APP_IMAGE_ORIGINAL}/${data?.backdrop_path}`}>
                      <LeftGradient />
                      <RightGradient />
                    </BackdropImage>
                    <RightBlur />
                  </Backdrop>
                </PosterContainer>

                <Main>
                  <Container>
                    <PosterWrapper>
                      <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${data?.poster_path}`} />
                    </PosterWrapper>
                    <ContentWrapper>
                      <Title>{data?.title}</Title>
                      <Keyword>{year} ??? {genres}</Keyword>
                      <AverageRate>?????? ???{data?.vote_average} ({data?.vote_count}???)</AverageRate>
                      <Actions>
                        <StarRate>
                          <StarRateText>????????????</StarRateText>
                          <RatingWrapper>
                            <StyledRating
                              precision={0.5}
                              size="large"
                              emptyIcon={<MdStar style={{color: '#EEEEEE'}} />}
                            />
                          </RatingWrapper>
                        </StarRate>
                        <Divider />
                        <ActionButtonContainer>
                          <ActionButton><FiPlus />???????????????</ActionButton>
                          <ActionButton><MdEdit />?????????</ActionButton>
                          <ActionButton><AiFillEye />?????????</ActionButton>
                          <ActionButton><FiMoreHorizontal />?????????</ActionButton>
                        </ActionButtonContainer>
                      </Actions>
                    </ContentWrapper>
                  </Container>
                </Main>
              </TopInfo>  
              <BottomInfo>
                <ContentSectionContainer>
                  <DefaultInfo
                    title={data.title}
                    original_title={data.original_title}
                    year={year}
                    genres={genres}
                    runtime={data.runtime}
                    overview={data.overview}
                  />
                  <Similar id={`${data.id}`} />
                </ContentSectionContainer>
                <ContentSectionContainer>
                  <Gallery id={`${data.id}`} />
                  <DividerLine />
                  <Video id={data.id} />
                </ContentSectionContainer>
              </BottomInfo>
            </>
          )
        }
      </>
    </Base>
  )
}

export default MovieDetail