"use client"
import registerUser from "@/server/actions/register"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ClipLoader } from "react-spinners"

export default function AuthPage() {
    const [username, setUsername] = useState('');
    const [spinner, renderSpinner] = useState(false);

    const router = useRouter();
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        renderSpinner(true);
        
        try {
           let payload = { username: username }
           let operation = await registerUser(payload)
           if (!operation) {
                throw new Error("No se ha podido registrar el usuario")
           }
           router.push("/ai")
           renderSpinner(false);
        } catch(error) {
            renderSpinner(false)
            console.error(error)
            alert(error)
            return
        }     

    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex items-center justify-center mt-[25vh]">
            <div className="w-80 rounded-2xl bg-white border border-black">
                <div className="flex flex-col items-center gap-2 p-8">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Usuario" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                    <label className="flex cursor-pointer items-center justify-between p-1">
                        Aceptar terminos de uso
                        <div className="relative ml-1 inline-block">
                            <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900" />
                        </div>
                    </label>
                   
                    <ClipLoader color="#00FF14" loading={spinner} size={50} />
                    <button type="submit" className="inline-block cursor-pointer rounded-md bg-green-500 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Crear Usuario</button>
                </div>
            </div>
        </form>
    )
}