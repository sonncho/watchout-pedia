import api from '.';

/**------------------
 * 리스트 조회 API
-------------------*/
// 최근 tv리스트
export const latestApi = () => api.get('/tv/latest');
// 오늘 방영한 tv 리스트
export const airingTodayApi = () => api.get('tv/airing_today');
// 현재 방영중인 tv 리스트
export const onTheAirApi = () => api.get('/tv/on_the_air');
// 인기있는 tv 리스트
export const popularApi = () => api.get('/tv/popular');
// 평점높은 tv 리스트
export const topRatedApi = () => api.get('/tv/top_rated');

/**------------------
 * 상세정보 조회 API
-------------------*/
// tv 상세 정보
export const detailApi = (tvId: string) => api.get(`/tv/${tvId}`);
// 특정 tv의 유사 tv 리스트
export const similarApi = (tvId: string) => api.get(`/tv/${tvId}/similar`);

/**------------------
 * 검색 API
-------------------*/
// tv 검색 리스트
export const searchApi = (query: string) => api.get(`/search/tv?query=${query}`);
