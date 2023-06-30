import useSWR from "swr"
import fetcher, { BaseUrl } from "../lib/fetcher"

const useMovie = (id?: string) => {
    const { data, error, isLoading } = useSWR(id ? `${BaseUrl}/api/movies/${id}` : null, fetcher, {
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