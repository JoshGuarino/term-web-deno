import { highlightBlue, highlightBoxBlue, highlightBoxRed, highlightRed } from "../utils/highlighter.tsx";
import { propmptProps } from "../utils/types.ts";

export default function Prompt(props: propmptProps) {
    return (
        <span>
            <span>{highlightBlue(props.user)}</span>
            <span> on </span>
            <span>{highlightRed(props.host)}</span>
            <span>{highlightBlue(' ~ ')}</span>
        </span>
    )
}