import React from 'react';
import styled from '@emotion/styled/macro';
import useLatestMovie from './useLatestMovie';
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
const LatestMovieSection:React.FC = () => {
  const { data, isLoading } = useLatestMovie();

  // 날짜값을 받아 '-'구분자로 배열을 생성하여 가장 첫번쨰 값을 가져옴.
  // ex> 2022-01-23 --> [2022, 01, 23] -> 가장 첫번째값 2022 리턴
  const getYear = (date: string) => date.split('-')[0];

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {
        isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          <Card
            linkUrl={`/movie/${data.data.id}`}
            title={data.data.title}
            posterPath={
              data.data.poster_path === null
              ? '/empty.jpg'
              : `${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`
            }
            voteAverage={data.data.vote_average}
            year={getYear(data.data.release_date)}
          />
        )
      }
    </Base>
  )
}

export default LatestMovieSection;