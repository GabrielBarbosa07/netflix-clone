import useSwr from 'swr'
import fetcher from "../lib/fetcher"

const useMovieList = () => {
  const { data, error, isLoading } = useSwr('http://localhost:3000/api/movies', fetcher, {
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