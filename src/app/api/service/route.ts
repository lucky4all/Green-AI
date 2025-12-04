import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText, zodSchema } from "ai";
import type { NextRequest } from "next/server";
import Prompt from "@/schema/prompt.schema";
import sanitizeHtml from "sanitize-html";
import finalPrompt from "@/lib/prompt";

/* TO DO
1. Git branch or make a v2 API endpoint with text streaming
2. encode the prompt in TOON format
*/
export async function POST(req: NextRequest) {
    try {
        const { prompt }: Prompt = await req.json();
        if (!prompt || prompt.trim() === '' ) {
            return NextResponse.json({
                error: "El prompt está vacio"
            }, { status: 400 })
        }
        let userPrompt = sanitizeHtml(prompt, { allowedAttributes: {}, allowedTags: [] })

        const { text } = await generateText({
            model: google('gemini-2.5-pro'),
            prompt: `${finalPrompt.system} ${finalPrompt.user(userPrompt)}`
        })
        return NextResponse.json({
            response: text
        })
    } catch (error) {
        console.error("Error en la ruta /api/service:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}