import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import serverAuth from "../../../../lib/serverAuth";

export default async function GET(req: NextApiRequest) {
    if (req.method !== "GET") {
        return NextResponse.json({ status: 405 })
    }

    try {
        const { currentUser } = await serverAuth(req)

        return NextResponse.json(currentUser, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}