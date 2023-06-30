import { NextResponse } from "next/server"
import serverAuth from "../../../../lib/serverAuth";

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

//Trazendo os filmes favoritos do currentUser
export async function GET() {
    new Headers({ "Content-Type": "application/json" })
    
    try {
        const { currentUser } = await serverAuth()

        const user = await prismadb.user.findUnique({
            where: {
                email: currentUser?.email || ""
            }

        })

        const favoriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: user?.favoriteIds
                }
            }
        })

        return NextResponse.json(favoriteMovies, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}
