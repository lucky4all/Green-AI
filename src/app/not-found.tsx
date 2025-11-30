import Image from "next/image"
export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center mt-[25vh]">
            <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">404 - No encontrado</h1>
            <p>No se ha podido encontrar la página que estabas buscando.</p>
            <Image src="/greenAI.png" width={300} height={350} alt="logo" />
        </main>
    )
}