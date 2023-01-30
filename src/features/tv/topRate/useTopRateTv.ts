import { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../../../types";
import { topRatedApi } from "../../../apis/tvApi";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('TopRateTv', topRatedApi);
}

export default useTopRateTv