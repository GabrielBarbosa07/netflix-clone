import { NextResponse } from "next/server";

import prismadb from "../../../../../lib/prismadb"
import serverAuth from "../../../../../lib/serverAuth"

export async function GET(req: Request) {
    if (req.method !== "GET") {
        return NextResponse.json({ status: 405 })

    }

    try {
        await serverAuth()

        const splitUrl = req.url.split("/")
        const movieId = splitUrl[splitUrl.length - 1]

        if (typeof movieId !== "string") {
            throw new Error('Invalid ID')
        }

        if (!movieId) {
            throw new Error('Invalid ID')
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        });

        if (!movie) {
            throw new Error('Invalid ID')
        }

        return NextResponse.json(movie, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 })
    }
}