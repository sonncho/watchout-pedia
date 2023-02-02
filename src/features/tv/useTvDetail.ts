import { useQuery } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { detailApi } from '../../apis/tvApi';
import { TVDetail } from '../../../types';

const useTvDetail = (id: string) => {
  const queryFn = () => detailApi(id);
  const { data, isLoading, isError } = useQuery<AxiosResponse<TVDetail>, AxiosError>(['tvDetail', id], queryFn);
  return {
    isLoading,
    isError,
    data: data?.data
  }
}

export default useTvDetail;