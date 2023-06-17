import { NextResponse } from "next/server"
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function GET(req: NextApiRequest) {
    try {
        const session = await getServerSession(authOptions);
        console.log(session)

        const user = await prismadb.user.findUnique({
            where: {
                email: session?.user?.email || ""
            }

        })

        console.log(user)

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
