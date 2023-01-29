import React from 'react'
import styled from '@emotion/styled/macro';
import AiringTodayTvSection from '../features/tv/airingToday'
import OnTheAirTvSection from '../features/tv/onTheAir';
import PopularTvSection from '../features/tv/popular';

// import LatestTvSection from '../features/tv/latest'
const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const TvPage = () => {
  return (
    <Main>
      <Container>
        {/* <LatestTvSection /> */}
        <AiringTodayTvSection />
        <OnTheAirTvSection />
        <PopularTvSection />
      </Container>
    </Main>
  )
}

export default TvPage