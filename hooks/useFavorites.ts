import useSwr from 'swr'
import fetcher from '../lib/fetcher';

const useMovies = () => {
    const { data, error, isLoading, mutate } = useSwr('http://localhost:3000/api/favorites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useMovies;