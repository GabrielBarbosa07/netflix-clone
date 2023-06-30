import useSwr from 'swr'
import fetcher, { BaseUrl } from "../lib/fetcher"

const useMovieList = () => {
  const { data, error, isLoading } = useSwr(`${BaseUrl}/api/movies`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMovieList;