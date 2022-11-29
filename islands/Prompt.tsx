import { useState } from "preact/hooks";

export default function Prompt() {
    const [user, setUser] = useState('guest');
    const [host, setHost] = useState('jg-terminal');

    return (
        <>
            <span class="text-red-400">{user}@{host}</span>
            <span>:</span>
            <span class="text-blue-400">~</span>
            <span>$ </span>
        </>
    )
}