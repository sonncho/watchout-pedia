import { ListResponse, MovieDetail } from './../../../types/index';
import {useQuery} from 'react-query';
import { detailApi } from '../../apis/movieApi';
import { AxiosResponse, AxiosError } from 'axios';

const useMovieDetail = (id: string) => {
  const queryFn = () => detailApi(id);
  const { isLoading, isError, data } = useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', id], queryFn, { enabled: Boolean(id)})

  return {
    isLoading,
    isError,
    data: data?.data
  }
}

export default useMovieDetail;