import { MouseEventHandler } from "react"

export interface DefaultButtonProps {
    message: string
    click?: MouseEventHandler<HTMLButtonElement>
}

export interface AIButtonProps extends DefaultButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}