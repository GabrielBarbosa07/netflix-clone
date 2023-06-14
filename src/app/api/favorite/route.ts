import { NextResponse } from "next/server"
import { NextApiRequest } from "next"

import prismadb from "../../../../lib/prismadb"

import { useSession } from "next-auth/react";
import { without } from "lodash";

export const GetUser = async () => {
    const { data: session } = useSession();

    const user = await prismadb.user.findUnique({
        where: {
            email: session?.user?.email || ""
        }
    })

    if (!user) {
        return null;
    }

    return user;
}

export async function POST(req: NextApiRequest) {
    const { data: session } = useSession();

    try {
        const { movieId } = req.body

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if (!existingMovie) {
            throw new Error("Invalid ID")
        }

        const user = await prismadb.user.update({
            where: {
                email: session?.user?.email || "",
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

export async function DELETE(req: NextApiRequest) {
    const { data: session } = useSession();

    try {
        const { movieId } = req.body

        const user = await prismadb.user.findUnique({
            where: {
                email: session?.user?.email || ""
            }
        })

        if (!user) {
            return null
        }

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })

        if (!existingMovie) {
            throw new Error("Invalid ID")
        }

        const updatedFavoriteIds = without(user.favoriteIds, movieId)

        const updatedUser = await prismadb.user.update({
            where: {
                email: user.email || ""
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