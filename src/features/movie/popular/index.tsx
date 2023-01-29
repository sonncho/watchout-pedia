import React from 'react';
import styled from '@emotion/styled/macro';
import usePopularMovie from './usePopularMovie';
import Slider from '../../../components/Slider';
import Card from '../../../components/Card';

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const PopularSection:React.FC = () => {
  const { data, isLoading } = usePopularMovie();

  // 날짜값을 받아 '-'구분자로 배열을 생성하여 가장 첫번쨰 값을 가져옴.
  // ex> 2022-01-23 --> [2022, 01, 23] -> 가장 첫번째값 2022 리턴
  const getYear = (release_date: string) => release_date.split('-')[0];

  return (
    <Base>
      <Title>인기 상영작</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <Slider>
            {
              data?.data?.results.map(movie => (
                <Card
                  key={movie.id}
                  linkUrl={`/movie/${movie.id}`}
                  title={movie.title}
                  posterPath={
                    movie.poster_path === null
                    ? '/empty.jpg'
                    : `${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`
                  }
                  voteAverage={movie.vote_average}
                  year={getYear(movie.release_date)}
                />
              ))
            }
          </Slider>
        )
      }
    </Base>
  )
}

export default PopularSection;