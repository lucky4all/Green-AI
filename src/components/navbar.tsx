"use client"
import { raleway } from "@/lib/fonts"
import { useRouter } from "next/navigation"
export default function NavBar() {
    const route: any = useRouter()
    function redirectToHome() {
        route.push("/")
    }
    function redirectToAi() {
        route.push("/ai")
    }

    function redirectToBlog() {
        route.push("/blog")
    }
    
    return (
        <>  { /* Agregar diseño responsive */}
            <nav className="bg-green-500 w-screen h-max py-5 sm">
                <ul className="flex flex-row items-center justify-between text-white gap-0 xl:gap-10 px-4 xl:px-20 lg:px-10 md:px-6 sm:px-4 xs:px-2 flex-wrap flex-1">
                    <h2 className={`${raleway.className} ml-1 gradient-title text-3xl`}>Green AI |</h2>
                    <li onClick={redirectToHome} className="list">Inicio</li>
                    <li onClick={redirectToAi} className="list">Corregir</li>
                    <li onClick={redirectToBlog} className="list">Blog</li>
                </ul>
            </nav>
            <div className="border-b border-gray-200 bg-gray-100 px-4 py-2 text-gray-900">
                <p className="text-center font-medium">
                    Made by LuckyDev - Versión en desarrollo
                </p>
            </div>
        </>
    )
}