import api from ".";
// import axiosInstance from './index.ts;

/**------------------
 * 리스트 조회 API
-------------------*/
// 최근 영화 리스트
export const latestApi = () => api.get('/movie/latest');
// 개봉예정 영화 리스트
export const upcomingApi = () => api.get('/movie/upcoming');
// 현재 상영중인 영화 리스트
export const nowPlayingApi = () => api.get('/movie/now_playing');
// 평점높은 영화 리스트
export const topRatedApi = () => api.get('/movie/top_rated');
// 인기있는 영화 리스트
export const popularApi = () => api.get('/movie/popular');

/**------------------
 * 상세정보 조회 API
-------------------*/
// 영화 상세 정보
export const detailApi = (movieId: string) => api.get(`/movie/${movieId}`);
// 특정영화의 유사 영화 리스트
export const similarApi = (movieId: string, page: number=1) => api.get(`/movie/${movieId}/similar`, { params: { page } });
export const galleryApi = (movieId: string) => api.get(`/movie/${movieId}/images?include_image_language=null`);
export const videoApi = (movieId: number) => api.get(`/movie/${movieId}/videos`);

/**------------------
 * 검색 API
-------------------*/
// 영화검색 영화 리스트
export const searchApi = (query: string) => api.get(`/search/movie?query=${query}`);




