import React from 'react'
import useTopRateTv from './useTopRateTv';
import styled from '@emotion/styled/macro';
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

const TopRateTvSection = () => {
  const { data, isLoading } = useTopRateTv();
  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  return (
    <Base>
      <Title>평균별점이 높은 작품</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <Slider>
            {
              data?.data?.results.map((tv) => (
                <Card
                  key={tv.id}
                  linkUrl={`/tv/${tv.id}`}
                  title={tv.name}
                  posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                  voteAverage={tv.vote_average}
                  year={getYear(tv.first_air_date)}
                />
              ))
            }
          </Slider>
        )
      }
    </Base>
  )
}

export default TopRateTvSection