"use client"
import { raleway } from "@/lib/fonts"
import { useRouter } from "next/navigation"
export default function NavBar() {
    const route:any = useRouter()
    function redirectToHome() {
        route.push("/")
    }
    function redirectToAi() {
        route.push("/ai")
    }

    function redirectToAccount() {
        route.push("/account")
    }
    return (
        <>
            <nav className="bg-green-500 w-screen h-max py-5">
                <ul className="flex flex-row items-center justify-between text-white gap-0">
                    <h2 className={`${raleway.className} ml-1 gradient-title text-3xl`}>Green AI |</h2>
                    <li onClick={redirectToHome} className="list">Inicio</li>
                    <li onClick={redirectToAi} className="list">Corregir</li>
                    <li onClick={redirectToAccount} className="list">Mi cuenta</li>
                </ul>
            </nav>
        </>
    )
}