import useSwr from 'swr'
import fetcher, { BaseUrl } from '../lib/fetcher';

const useFavorites = () => {
    const { data, error, isLoading, mutate } = useSwr(`${BaseUrl}/api/favorites`, fetcher, {
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