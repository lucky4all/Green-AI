import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JWTService } from "./lib/jwt";

export function proxy(request: NextRequest) {
    try {
       const jwt = new JWTService()
        let cookies = request.cookies
        let token:any = cookies.get("authtoken")
        console.log(token)
        if (!token) return NextResponse.redirect(new URL("/auth", request.url))
        let operation = jwt.verifyToken(token.value) 
        let judge = operation ? NextResponse.next() : NextResponse.redirect(new URL("/auth", request.url))
        return judge
    } catch(error) {
        console.error(error)
        NextResponse.redirect(new URL("/auth", request.url))
    }
}

export const config = {
    matcher: "/ai"
}
