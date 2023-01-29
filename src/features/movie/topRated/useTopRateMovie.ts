import { ListResponse, MovieDetail } from '../../../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/movieApi';

const useTopRatedMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRatedMovie', topRatedApi);
}

export default useTopRatedMovie;