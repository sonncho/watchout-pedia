import { ListResponse } from './../../../../types/index';
import { TVDetail } from '../../../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { airingTodayApi } from '../../../apis/tvApi';

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayTv', airingTodayApi);
}

export default useAiringTodayTv;