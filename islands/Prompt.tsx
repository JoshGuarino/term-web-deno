
export interface propmptProps {
    user: string
    host: string
}

export default function Prompt(props: propmptProps) {
    return (
        <>
            <span class="text-red-400">{props.user}@{props.host}</span>
            <span>:</span>
            <span class="text-blue-400">~</span>
            <span>$ </span>
        </>
    )
}