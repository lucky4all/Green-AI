"use client"
import { AIButton, DefaultButton } from "@/components/buttons"
import { geist, montserrat, raleway, ubuntu, nunito } from "@/lib/fonts"
import text from "@/utils/example-test"
import { useState, MouseEventHandler } from "react"
import { z, ZodError } from 'zod'

export default function AiPage() {

    const [message, setMessage] = useState('');
    const [renderResult, setRenderResult] = useState(false);
    const [info, setInfo] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [clientError, renderClientError] = useState(false);

    const messageDto = { message: message }
    const MessageSchema = z.object({
        message: z.string().nonempty("El mensaje no puede estar vacio.")
    })

    const handleClick = async (): Promise<void> => {
        try {
            MessageSchema.parse(messageDto)
            setLoading(true)
            let response = await fetch("/api/service", { method: "POST", body: JSON.stringify({ prompt: message }), headers: { "Content-Type": "application/json" } })
            let data = await response.json()
            if (!response.ok) {
                throw new Error(`El servicio de IA respondió con un error: ${response.status}`);
            }
            
            setInfo(data.response)
            setLoading(false)
            setRenderResult(true)

        } catch (error) {
            setLoading(false)
            console.error("Error al conectar con el servicio de IA", error)
            if (error instanceof ZodError) {
                renderClientError(true)
            }
            return
        }
    }

    if (renderResult) {
        return (
            <GrammarToast text={message} corrected={info.corrected} observations={info.observations} onBack={() => setRenderResult(false)} />
        )
    }
    if (loading) {
        return (
            <LoadingPage />
        )
    }

    return (
        <>
            <main className="flex flex-col items-center justify-center mt-[25vh]">
                <h2 className={`${geist.className} text-4xl m-[5vh] animate-pulsing animate-duration-slower animate-delay-500`}>Escribe tu texto a continuación y deja que nuestra inteligencia artificial lo corrija.</h2>

                <section className="flex">
                    <div className="input">

                        <div className="flex flex-col items-center justify-center h-full gap-y-4">
                            <textarea onChange={(e) => setMessage(e.target.value)} maxLength={500} className="search" placeholder={text} />
                                { clientError && <p className="text-red-500 font-bold">No puedes enviar un texto vacio.</p>  }
                            <AIButton onClick={handleClick} message="Corregir" />
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}


export function GrammarToast({ onBack, text, corrected, observations }: { onBack: MouseEventHandler<HTMLButtonElement>, text: any, corrected: string, observations?: string }) {
    return (
        <main className={raleway.className}>
            <div className="text-center mt-[25vh]">
                <h1 className={`${montserrat.className} text-4xl`}>Aquí tienes tu corrección! Gracias por usar nuestro servicio </h1>
            </div>
            <div className="flow-root mt-5">

                <dl className="divide-y divide-gray-200 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Agente IA</dt>
                        <dd className="text-gray-700 sm:col-span-2">Gemini 2.5 Flash</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Tu texto</dt>
                        <dd className="text-red-700 sm:col-span-2">{text}</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Texto corregido</dt>
                        <dd className="text-green-700 sm:col-span-2">
                            {corrected}
                        </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Observaciones</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            {observations}
                        </dd>
                    </div>
                </dl>
                <div className="text-center mt-15">

                    <DefaultButton message="Volver" click={onBack} />

                </div>

            </div>

        </main>
    )
}

export function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-10">
            <h1 className={`${ubuntu.className} text-6xl text-center`}>Haciendo cosas de IA...</h1>
            <p>Tiempo estimado de espera: <span className="font-bold text-green-600">10 segundos</span></p>
            
            <div className="loading">
                <div className="loading-box">
                    <div className="WH color l1"></div>
                    <div className="ball color"></div>
                    <div className="WH color l2"></div>
                </div>
            </div>
            <p className={`${nunito.className} text-gray-500`}>¿Sabias que...? La IA no imita al cerebro humano... pero se inspira en él. Aunque se dice que la IA “aprende sola”, en realidad depende de algo fundamental: los datos.</p>

        </div>
    )
}