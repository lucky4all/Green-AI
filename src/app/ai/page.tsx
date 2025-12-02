"use client"
import { AIButton, DefaultButton } from "@/components/buttons"
import { geist, montserrat, raleway } from "@/lib/fonts"
import text from "@/utils/example-test"
import { useState, useContext } from "react"
import Spinner from "@/components/spinner"
import Link from "next/link"
import { StateContext } from "@/lib/hooks/stateContext"

export default function AiPage() {

    const [message, setMessage] = useState('');
    const [renderResult, setRenderResult] = useState(true)
    const render = useContext(StateContext)

    const handleClick = async (): Promise<Object | void> => {
        let response = await fetch("/api/service", { method: "POST", body: JSON.stringify({ prompt: message }) })
        let data = await response.json()
        console.log(data)
    }
    if (renderResult) {
        return (
            <StateContext.Provider value={render}>
               <GrammarToast /> 
            </StateContext.Provider>
            
        )
    }
    return (
        <>
            <main className="flex flex-col items-center justify-center mt-[25vh]">
                <h1 className={`${geist.className} text-4xl mb-[10vh] animate-pulsing animate-duration-slower animate-delay-500`}>Escribe tu texto a continuación y deja que nuestra inteligencia artificial lo corrija.</h1>

                <section className="flex">
                    <div className="input">

                        <div className="flex flex-col items-center justify-center h-full gap-y-4">
                            <textarea onChange={(e) => setMessage(e.target.value)} maxLength={500} className="search" placeholder={text} defaultValue={""} />
                            <AIButton onClick={handleClick} message="Corregir" />
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export function GrammarToast() {
    return (
        <main className={raleway.className}>
            <div className="text-center mt-[25vh]">
              <h1 className={`${montserrat.className} text-4xl`}>Aquí tienes tu correción! Gracias por usar nuestro servicio </h1>  
            </div>
            <div className="flow-root mt-5">
                
                <dl className="divide-y divide-gray-200 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Agente IA</dt>
                        <dd className="text-gray-700 sm:col-span-2">Gemini 2.5 Pro</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Tu texto</dt>
                        <dd className="text-gray-700 sm:col-span-2">{text}</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Bio</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
                            debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
                            quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
                            aliquam soluta architecto??!
                        </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Observaciones</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            Tu texto contenia varios errores gramáticales. Por ejemplo, escribiste "Dinozaurio" con Z, mientras que Dinosaurio lleva S.
                        </dd>
                    </div>
                </dl>
                <div className="text-center mt-15">
                    <Link href="/ai" prefetch={false}>
                        <DefaultButton message="Volver" /> 
                    </Link>
                   
                </div>
                
            </div>
            
        </main>
    )
}