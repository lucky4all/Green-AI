"use server"
import { JWTService } from "@/lib/jwt"
import { cookies } from "next/headers"
import sanitizeHtml from 'sanitize-html'
import Payload from "@/schema/payload.schema"

export default async function registerUser(payload: Payload) {
    let date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90) // 90 days
    let jwt = new JWTService

    const { username } = payload
    const sanitize = sanitizeHtml(username, { allowedAttributes: {}, allowedTags: [] })
    payload.username = sanitize
    const token = jwt.signToken(payload)
    let cookie = (await cookies()).set("authtoken", token, {  httpOnly: true, expires: date })
    return cookie ? true : false
}