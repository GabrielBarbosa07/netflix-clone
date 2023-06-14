import { NextResponse } from "next/server"
import { NextApiRequest } from "next"

import prismadb from "../../../../lib/prismadb"

import { GetUser } from "../favorite/route";

export default async function GET(req: NextApiRequest) {
    try {
        const user = await GetUser();

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