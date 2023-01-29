import { ListResponse } from './../../../../types/index';
import { TVDetail } from '../../../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { popularApi } from '../../../apis/tvApi';

const usePopularTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('popularTv', popularApi);
}

export default usePopularTv;