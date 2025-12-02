import Link from "next/link";
import { DefaultButton, DocsButton, GitHubButton } from "@/components/buttons"
import { geist, raleway } from "@/lib/fonts";
import { Spoiler } from "spoiled";
import Spinner from "@/components/spinner";
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

          <Link href="/docs">
            <DocsButton message="Documentación" />
          </Link>

        </div>

        <section className="grid grid-cols-1 gap-5 items-center justify-center shrink-0 max-w-xl mt-[20vh]">
          <div className="inline-block">
            <h2 className={`${geist.className} text-2xl`}>Descubre lo que puedes hacer con Green AI 🪄</h2>
          </div>

          <aside className={`${raleway.className} text-sm`}>(Mueve el ratón por encima para ver la magia)</aside>
          <Spoiler revealOn="hover" theme="light">
            Con GreenAI puedes corregir textos en español de manera rápida y precisa. Simplemente ingresa tu texto y deja que nuestra inteligencia artificial haga el resto. ¡Olvídate de los errores gramaticales y mejora la calidad de tus escritos al instante!
          </Spoiler>

        </section>

      </main>
      <footer>
        <footer className="bg-white mt-[20vh] border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <Suspense fallback={<Spinner />}>
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
