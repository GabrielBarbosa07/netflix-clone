import { NextResponse } from "next/server"
import { NextApiRequest } from "next"

import prismadb from "../../../../lib/prismadb"

export async function GET(req: NextApiRequest) {

    if (req.method !== "GET") {
        return NextResponse.json({ status: 405 })
    }

    try {
        const movies = await prismadb.movie.findMany()

        return NextResponse.json(movies, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}