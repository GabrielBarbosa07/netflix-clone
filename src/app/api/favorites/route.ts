import { NextResponse } from "next/server"
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next"


export async function GET(req: NextApiRequest) {
    const session = await getServerSession(req);
    return session

    // if (!session) {
    //     NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    //     return;
    // }

    // NextResponse.json(session.user, { status: 200 });
}

// export async function GET(req: NextApiRequest) {
//     const session = await getSession()
//     try {
//         const { currentUser } = await serverAuth(req)

//         const favoriteMovies = await prismadb.movie.findMany({
//             where: {
//                 id: {
//                     in: currentUser?.favoriteIds
//                 }
//             }
//         })

//         return NextResponse.json(currentUser, { status: 200 })
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({ status: 400 })
//     }
// }