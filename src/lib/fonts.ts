import { Geist, Montserrat, Raleway, Ubuntu_Sans_Mono, Nunito_Sans } from 'next/font/google'

export const geist = Geist({
    weight: "800",
    subsets: ["latin"],
    adjustFontFallback: false
})

export const montserrat = Montserrat({
    weight: "900",
    subsets: ["latin"],
    adjustFontFallback: false
})

export const raleway = Raleway({
    weight: "700",
    subsets: ["latin"],
    adjustFontFallback: false
})

export const ubuntu = Ubuntu_Sans_Mono({
    weight: "600",
    subsets: ["latin"],
    adjustFontFallback: false
})
export const nunito = Nunito_Sans({
    weight: "700",
    subsets: ["latin"],
    adjustFontFallback: false
})