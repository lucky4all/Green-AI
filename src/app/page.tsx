import Link from "next/link";
import { DefaultButton, DocsButton } from "@/components/buttons"
import { geist, raleway } from "@/lib/fonts";
import { Spoiler } from "spoiled";

export default function Home() {

  return (
    <>
      <main className="flex items-center justify-center mt-[25vh] flex-col gap-y-5">

        <h1 className={`${geist.className} gradient text-7xl `}>Green AI</h1>
        <p>La herramienta que necesitas para una gramática <span className="underline font-mono animate-rotate-in">perfecta</span></p>
        
        <div id="button-list">

          <Link href="/ai">
            <DefaultButton message="Empezar" />
          </Link>

          <Link href="/docs">
            <DocsButton message="Documentación" />
          </Link>

        </div>

          <section className="grid grid-cols-2 gap-5 items-center justify-center shrink-0 max-w-xl mt-[20vh]">
            <div className="inline-block">
              <h2 className={`${geist.className} text-2xl`}>Descubre lo que puedes hacer con Green AI 🪄</h2>
            </div>
            
            <aside className={`${raleway.className} text-sm`}>(Mueve el ratón por encima para ver la magia)</aside>
            <Spoiler revealOn="hover" theme="light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore recusandae harum reiciendis accusantium fuga placeat quo quibusdam, repudiandae consequatur nemo, culpa aut explicabo aliquam nostrum doloribus voluptas voluptates ipsam quam!
            </Spoiler>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tempora blanditiis consequatur quaerat, mollitia libero aperiam quasi molestiae rerum dicta, voluptates voluptatum fuga nobis nemo quia qui ex. Incidunt, saepe.</p>
          
          </section>
        
      </main>
      <footer></footer>
    </>

  );
}
