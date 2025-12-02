import { GITHUB_URL } from "@/utils/url";
import { montserrat } from "@/lib/fonts";
import { DefaultButtonProps, AIButtonProps } from "@/schema/buttons.schema";

export function DefaultButton({ message = "Boton" }: DefaultButtonProps) {
    return (
        <button className="cursor-pointer text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all" />
            <span className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all" />
            { message }
        </button>
    );
}

/*
TO-DO
1. Convertir a una función asincrona
2. Hacer server-side data fetching para obtener las estrellas del repositorio
*/
export async function GitHubButton({ message }: DefaultButtonProps) {
    let http = await fetch(GITHUB_URL, { next: { revalidate: 3600 } })
    let data = await http.json();
    let stars = data.stargazers_count
    return (
        <button className="border border-black cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900">
            <svg className="mr-2 text-white" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="text-white">{ message }</span>
            <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                <svg className="text-yellow-500" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-white ml-2">{ stars }</span>
            </span>
        </button>
    );
}

export function DocsButton({ message }: DefaultButtonProps) {
    return (
        <button className={`${montserrat.className} bg-black text-white cursor-pointer p-3 rounded ml-5 hover:bg-gray-800 transition-colors`}>{ message }</button>
    )
}

export function AIButton({ message, onClick }: AIButtonProps) {
    return (
    <button onClick={onClick} className="border-2 border-black bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group cursor-pointer" type="button">
      <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-[184px] z-10 duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
          <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000" />
          <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000" />
        </svg>
      </div>
      <p className="translate-x-2">{ message }</p>
    </button>
  );
}