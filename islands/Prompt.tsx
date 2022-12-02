import { highlightBlue, highlightGreen, highlightRed } from "../utils/highlighter.tsx";

export interface propmptProps {
    user: string
    host: string
}

export default function Prompt(props: propmptProps) {
    return (
        <span class="text-lg">
            <span>{highlightRed(props.user)}</span>
            <span>@</span>
            <span>{highlightRed(props.host)}</span>
            <span>:</span>
            <span>{highlightBlue('~')}</span>
            <span>$ </span>
        </span>
    )
}