import { ListResponse, MovieDetail } from './../../../types/index';
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { similarApi } from "../../apis/movieApi";

const useSimilarMovie = (id: string) => {
  const queryFn = () => similarApi(id);
  const { data, isLoading, isError} = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['movieSimilar', id], queryFn);

  return {
    isLoading,
    isError,
    data: data?.data
  }
}

export default useSimilarMovie;