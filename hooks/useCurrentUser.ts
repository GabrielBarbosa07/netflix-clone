import useSWR from "swr"

import fetcher, { BASE_URL } from "../lib/fetcher"

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR(`${BASE_URL}/api/current`, fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser