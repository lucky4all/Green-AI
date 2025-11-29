import { raleway } from "@/lib/fonts"
import Image from "next/image"
export default function NavBar() {
    return (
        <>
            <nav className="bg-green-500 w-screen h-max py-5">
                
                <ul className="flex flex-row items-center justify-between text-white gap-0">
                    <h2 className={`${raleway.className} ml-1 gradient-title text-3xl`}>Green AI |</h2>
                    <li className="list">Algo</li>
                    <li className="list">Otro</li>
                    <li className="list">Sexo</li>
                </ul>
            </nav>
        </>
    )
}