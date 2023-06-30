import { NextResponse } from "next/server"

import prismadb from "../../../../lib/prismadb"

export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

export async function GET(req: Request) {
    new Headers({ "Content-Type": "application/json" })

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