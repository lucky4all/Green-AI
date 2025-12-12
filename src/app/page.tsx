import Link from "next/link";
import { DefaultButton, DocsButton, GitHubButton } from "@/components/buttons"
import { geist, raleway } from "@/lib/fonts";
import { Spoiler } from "spoiled";
import { Suspense } from "react";

export default function Home() {

  return (
    <>
      <main className="flex items-center justify-center mt-[25vh] flex-col gap-y-5">

        <h1 className={`${geist.className} gradient text-7xl `}>Green AI</h1>
        <p>La herramienta que necesitas para una gramática <span className="underline font-mono animate-rotate-in">perfecta</span></p>

        <div id="button-list">

          <Link href="/ai" prefetch={false}>
            <DefaultButton message="Empezar" />
          </Link>

          <a href="https://github.com/lucky4all/Green-AI" target="_blank" rel="noopener noreferrer">
            <DocsButton message="Documentación" />
          </a>

        </div>

        <section className="grid grid-cols-1 gap-5 items-center justify-center shrink-0 max-w-xl mt-[20vh]">
          <div className="inline-block">
            <h2 className={`${geist.className} text-2xl`}>Descubre lo que puedes hacer con Green AI 🪄</h2>
          </div>

          <aside className={`${raleway.className} text-sm`}>(Mueve el ratón por encima para ver la magia)</aside>
          <Spoiler revealOn="hover" theme="light">
            Con GreenAI puedes corregir textos en español de manera rápida y precisa. Simplemente ingresa tu texto y deja que nuestra inteligencia artificial haga el resto. ¡Olvídate de los errores gramaticales y mejora la calidad de tus escritos al instante!
            Además, GreenAI es completamente gratuito y fácil de usar. No necesitas ser un experto en gramática para aprovechar sus beneficios. ¡Empieza a usar GreenAI hoy mismo y lleva tus textos al siguiente nivel!
          </Spoiler>

        </section>

        <article className="mt-[20vh] w-full px-4">
          <div className="max-w-xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
              Preguntas Frecuentes (FAQ)
            </h2>

            
            <details className="group mb-3 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-t-lg group-open:rounded-b-none">
                <span>¿Qué tipo de errores gramaticales puede corregir GreenAI?</span>
                
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="px-4 py-4 bg-white border-t border-gray-200 text-gray-600">
                GreenAI no solo corrige errores de ortografía (tildes, letras), sino que también se especializa en fallos de sintaxis, concordancia verbal, uso incorrecto de preposiciones, y vicios del lenguaje comunes en el español. Está diseñado para mejorar la fluidez y naturalidad de textos complejos.
              </div>
            </details>

            
            <details className="group mb-3 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 open:shadow-md">

              <summary className="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-t-lg group-open:rounded-b-none">
                <span>¿Cómo sé que la corrección es correcta y no cambia mi intención?</span>
                
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <div className="px-4 py-4 bg-white border-t border-gray-200 text-gray-600">
                GreenAI ofrece una vista comparativa (similar a un control de cambios) donde puedes ver exactamente qué palabras o frases fueron modificadas. Priorizamos la precisión semántica, por lo que solo sugerimos cambios cuando hay un claro error gramatical o de estilo que afecte la claridad.
              </div>
            </details>

          </div>
        </article>

      </main>
      <footer>
        <footer className="bg-white mt-[20vh] border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <Suspense fallback={<p>Cargando...</p>}>
                  <GitHubButton message="Ver en GitHub" />
                </Suspense>

              </div>

              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright © 2025. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </footer>
    </>

  );
}
