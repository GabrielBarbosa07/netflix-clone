import useSWR from "swr"

import fetcher, { BASE_URL } from "../lib/fetcher"


const useBillboard = () => {
    const { data, error, isLoading } = useSWR(`${BASE_URL}/api/random`, fetcher, {
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