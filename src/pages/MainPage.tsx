import React from 'react';
import styled from '@emotion/styled/macro';
// import LatestMovieSection from '../features/movie/latest'
import NowPlayingSection from '../features/movie/nowPlaying'
import PopularSection from '../features/movie/popular'
import TopRatedSection from '../features/movie/topRated'
import UpcomingSection from '../features/movie/upcoming'

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage = () => {
  return (
    <Main>
      <Container>
        {/* <LatestMovieSection /> */}
        <NowPlayingSection />
        <PopularSection />
        <TopRatedSection />
        <UpcomingSection />
      </Container>
    </Main>
  )
}

export default MainPage