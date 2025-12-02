import { MouseEventHandler } from "react"

export interface DefaultButtonProps {
    message: string
}

export interface AIButtonProps extends DefaultButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}