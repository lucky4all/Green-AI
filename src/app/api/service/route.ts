import { NextResponse } from "next/server";
import { encode } from '@toon-format/toon'
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import type { NextRequest } from "next/server";
import Prompt from "@/schema/prompt.schema";

/* TO DO
1. Git branch or make a v2 API endpoint with text streaming
2. encode the prompt in TOON format
*/
export async function POST(req: NextRequest) {
    try {
        const { prompt }:Prompt = await req.json();
        /*const { text } = await generateText({
            model: google('gemini-2.5-pro'),
            prompt: "¿5 + 5?"
        })*/
        return NextResponse.json({
            response: encode(prompt)
        })
    } catch (error) {
        console.error("Error en la ruta /api/service:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}