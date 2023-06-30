import useSWR from "swr"

import fetcher, { BaseUrl } from "../lib/fetcher"

const useBillboard = () => {
    const { data, error, isLoading } = useSWR(`${BaseUrl}/api/random`, fetcher, {
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

export default useBillboard