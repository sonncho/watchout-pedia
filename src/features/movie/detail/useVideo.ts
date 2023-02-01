import { ListResponse, Video } from './../../../../types/index';
import { useQuery } from "react-query"
import { AxiosResponse, AxiosError } from "axios"
import { videoApi } from "../../../apis/movieApi"

const useVideo = (id: number) => {
  const queryFn = () => videoApi(id);
  const { data, isLoading, isError } = useQuery<AxiosResponse<ListResponse<Video>>, AxiosError>(['video_movie', id], queryFn, { enabled: !!id })

  return {
    isLoading,
    isError,
    data: data?.data.results,
  }
}
export default useVideo