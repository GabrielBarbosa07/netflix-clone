import {cookies} from "next/headers"

export const checkUserAuthenticated = () =>{
    const cookieStore = cookies();
    const userToken = cookieStore.get("next-auth.session-token")

    return !!userToken
}