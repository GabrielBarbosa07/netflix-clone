import useSwr from 'swr'
import fetcher from "../lib/fetcher"

const useMovieList = () => {
  const { data, error, isLoading } = useSwr(`https://netflix-clone-gb.vercel.app/api/movies`, fetcher, {
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