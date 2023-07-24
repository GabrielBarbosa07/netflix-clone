import useSwr from 'swr'
import fetcher, { BASE_URL } from "../lib/fetcher"

const useMovieList = () => {
  const { data, error, isLoading } = useSwr(`${BASE_URL}/api/movies`, fetcher, {
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