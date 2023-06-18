import useSWR from "swr"

import fetcher from "../lib/fetcher"

const useBillboard = () => {
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/random", fetcher, {
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