import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { galleryApi } from "../../../apis/movieApi";

const useGallery = (id:string) => {
  const queryFn = () => galleryApi(id)
  const { data, isLoading, isError } = useQuery<AxiosResponse>(['gallery-movie', id], queryFn);
  return {
    isLoading,
    isError,
    data: data?.data.backdrops
  }
}

export default useGallery;