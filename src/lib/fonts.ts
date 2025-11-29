import { Geist, Montserrat, Raleway } from 'next/font/google'

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