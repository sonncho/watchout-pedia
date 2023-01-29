import { ListResponse } from './../../../../types/index';
import { TVDetail } from '../../../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { onTheAirApi } from '../../../apis/tvApi';

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('onTheAirTv', onTheAirApi);
}

export default useOnTheAirTv;