import { ListResponse, TVDetail } from './../../../types/index';
import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { similarApi } from '../../apis/tvApi';

const useTvSimilar = (id: string) => {
  const queryFn = () => similarApi(id);
  const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['tvSimilar', id], queryFn);

  return {
    isLoading,
    isError,
    data: data?.data
  }
}

export default useTvSimilar;