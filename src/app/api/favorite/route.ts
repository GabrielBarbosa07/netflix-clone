import { NextResponse } from "next/server"

import serverAuth from "../../../../lib/serverAuth";

import prismadb from "../../../../lib/prismadb"

import { without } from "lodash";

export const dynamic = "force-dynamic"

//Adicionando o filme aos filmes favoritos do currentUser
export async function POST(req: Request) {
    new Headers({ "Content-Type": "application/json" })

    if (req.method !== "POST") {
        return NextResponse.json({ status: 405 })
    }

    try {
        const { currentUser } = await serverAuth()

        const { movieId } = await req.json()

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            }
        });

        if (!existingMovie) {
            throw new Error('Invalid ID');
        }

        const user = await prismadb.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favoriteIds: {
                    push: movieId
                }
            }
        });

        return NextResponse.json(user, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}

//Removendo o filme dos filmes favoritos do currentUser
export async function DELETE(req: Request) {
    new Headers({ "Content-Type": "application/json" })
    
    if (req.method !== "DELETE") {
        return NextResponse.json({ status: 405 })
    }

    try {
        const { currentUser } = await serverAuth()

        const { movieId } = await req.json()
        console.log(movieId)

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
        return NextResponse.json({ status: 500 })
    }
}