import useSwr from 'swr'
import fetcher, { BASE_URL } from '../lib/fetcher';

const useFavorites = () => {
    const { data, error, isLoading, mutate } = useSwr(`${BASE_URL}/api/favorites`, fetcher, {
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

export default useFavorites;