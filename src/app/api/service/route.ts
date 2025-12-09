import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import type { NextRequest } from "next/server";
import Prompt from "@/schema/prompt.schema";
import sanitizeHtml from "sanitize-html";
import finalPrompt from "@/lib/prompt";
import { z } from "zod";    
import { unauthorized } from "next/navigation";
import { JWTService } from "@/lib/jwt";
import { cookies } from "next/headers";
import { UnauthorizedError, ExternalAiError, ClientError } from "@/lib/customError";
import { checkRateLimit } from '@vercel/firewall'
const PromptSchema = z.object({
    corrected: z.string(),
    observations: z.array(z.string())
})

export async function POST(req: NextRequest) {
    try {
        const { rateLimited } = await checkRateLimit('api-rate-limit');
        if (rateLimited) {
            console.log("Rate limited!")
            return NextResponse.json({
                message: "Too many requests",
                status: 429
            }, { status: 429 })
        }
        const jwt = new JWTService;
        const token:any = (await cookies()).get("authtoken");
        jwt.verifyToken(token)
        if (!jwt || !token) throw new UnauthorizedError("No posee token.")
        const { prompt }: Prompt = await req.json();
        if (!prompt || prompt.trim() === '' ) {
            return NextResponse.json({
                error: "El prompt está vacio"
            }, { status: 400 })
        } else if (prompt.length > 500) {
            throw new ClientError("Prompt demasiado largo.")
        }
        let userPrompt = sanitizeHtml(prompt, { allowedAttributes: {}, allowedTags: [] })
       
        const { object } = await generateObject({
            model: google('gemini-2.5-flash'),
            schema: PromptSchema,
            prompt: `${finalPrompt.system} ${finalPrompt.user(userPrompt)}`
        })
        
        if (!object) throw new ExternalAiError("La IA no ha respondido")

        return NextResponse.json({
            response: object
        })
    } catch (error) {
        if (error instanceof UnauthorizedError) {
            unauthorized()
        }
        if (error instanceof ExternalAiError) {
            return NextResponse.json({ error: "La IA no ha podido responder" }, { status: 500 })
        }
        console.error("Error en la ruta /api/service:", error);
        return NextResponse.json({ error: "Error interno del servidor", detalles: error }, { status: 500 });
    }
}