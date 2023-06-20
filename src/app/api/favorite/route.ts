import { NextResponse } from "next/server"
import { NextApiRequest } from "next"

import serverAuth from "../../../../lib/serverAuth";

import prismadb from "../../../../lib/prismadb"

import { without } from "lodash";

//Adicionando o filme aos filmes favoritos do currentUser
export async function POST(req: NextApiRequest) {
    try {
        const { currentUser } = await serverAuth()

        const { movieId } = req.body
        console.log(movieId)

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })
        console.log(existingMovie)

        if (!existingMovie) {
            throw new Error("Invalid ID")
        }

        const user = await prismadb.user.update({
            where: {
                email: currentUser?.email || "",
            },
            data: {
                favoriteIds: {
                    push: movieId
                }
            }
        })

        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}

//Removendo o filme dos filmes favoritos do currentUser
export async function DELETE(req: NextApiRequest) {
    try {
        const { currentUser } = await serverAuth()

        const { movieId } = req.body

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if (!existingMovie) {
            throw new Error("Invalid ID")
        }

        const updatedFavoriteIds = without(currentUser.favoriteIds, movieId)

        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser.email || ""
            },
            data: {
                favoriteIds: updatedFavoriteIds
            }
        })

        return NextResponse.json(updatedUser, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}