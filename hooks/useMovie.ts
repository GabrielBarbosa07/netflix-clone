import useSWR from "swr"
import fetcher, { BASE_URL } from "../lib/fetcher"

const useMovie = (id?: string) => {
    const { data, error, isLoading } = useSWR(id ? `${BASE_URL}/api/movies/${id}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        data,
        error,
        isLoading
    }
}

export default useMovie