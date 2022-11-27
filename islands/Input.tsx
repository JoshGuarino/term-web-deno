import { useEffect, useState } from "preact/hooks";

export default function Input() {
    const [input, setInput] = useState('')

    useEffect (() => {
        focusInput()
    })

    const focusInput = () => {
        document.getElementById('input')?.focus()
    }

    const inputHandler = (event: KeyboardEvent) => {
        console.log(event)        
        if (event.key.length === 1) {
            setInput(input + event.key)
        }
        if (event.code === 'Backspace'){
            setInput(input.slice(0, -1))
        }
        if (event.code === 'Space') {
            setInput(input + '\xa0')
        }
    }

    return (
        <span onKeyDown={inputHandler} id="input" tabIndex={0} onBlur={focusInput}>{input}</span>
    )
}