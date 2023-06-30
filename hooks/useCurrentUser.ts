import useSWR from "swr"

import fetcher, { BaseUrl } from "../lib/fetcher"

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR(`${BaseUrl}/api/current`, fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser