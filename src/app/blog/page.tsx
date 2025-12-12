import { geist } from "@/lib/fonts"

export default function BlogPage() {

    return (

        <main className={`${geist.className} flex flex-col items-center justify-center gap-y-12`}>
          <div className="mt-[10vh] bg-gray-50 xl:max-w-[50vw] lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[8vw] p-5 rounded-xs border border-gray-300 flex flex-wrap flex-col gap-y-4">
            <h1 className="text-5xl mt-5">Aún no hay blogs.</h1>
            <p className="text-gray-700">En esta sección, estaré publicando actualizaciones y noticias sobre Green AI.
                este proyecto se encuentra en  mantenimiento constante, recibiendo actualizaciones mensuales de rendimiento y caracteristicas.
                Cabe mencionar que este producto siempre será de uso libre y gratuito, garantizando la confiabilidad y disponibilidad de uso.
            </p>
          </div>
        </main>
        
    )
}