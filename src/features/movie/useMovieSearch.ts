import { AxiosResponse, AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ListResponse, Movie } from '../../../types';
import { searchApi } from '../../apis/movieApi';

const useMovieSearch = (query: string) => {
  const queryFn = () => searchApi(query);

  //* Query Options
  //- enabled(boolean) : 쿼리가 자동으로 실행되지 않게 설정하는 옵션.
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(['searchMovie', query], queryFn, 
  { enabled: Boolean(query) });
}

export default useMovieSearch;
