import { highlightBlue, highlightRed } from "../utils/highlighter.tsx";
import { propmptProps } from "../utils/types.ts";

export default function Prompt(props: propmptProps) {
    return (
        <span>
            <span>{highlightBlue(props.user)}</span>
            <span>@</span>
            <span>{highlightRed(props.host)}</span>
            <span>:</span>
            <span>{highlightBlue('~')}</span>
            <span>$ </span>
        </span>
    )
}