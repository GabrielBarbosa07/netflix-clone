import { NextResponse } from "next/server"

import prismadb from "../../../../lib/prismadb"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    new Headers({ "Content-Type": "application/json" })
    
    if (req.method !== "GET") {
        return NextResponse.json({ status: 405 })
    }

    try {
        const movieCount = await prismadb.movie.count()
        const randomIndex = Math.floor(Math.random() * movieCount)

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        })

        return NextResponse.json(randomMovies[0], { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}