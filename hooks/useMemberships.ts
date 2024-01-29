import fetcher from "@/lib/fetcher"
import useSWR from "swr"

const useMemberships = () => {
    const { data, error, isLoading } = useSWR('/api/membership', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        data, error, isLoading
    }
}

export default useMemberships