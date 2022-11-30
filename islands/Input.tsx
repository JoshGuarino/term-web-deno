import { useEffect, useState } from "preact/hooks";
import { Caret } from "../components/Caret.tsx";
import Output, { historyEntry } from "../islands/Output.tsx";
import Prompt from "../islands/Prompt.tsx";

export const commands = ['clear', 'help']

export default function Input() {
    const [input, setInput] = useState('')
    const [commandHistory, setCommandHistory] = useState<Array<string>>([])
    const [outputHistory, setOutputHistory] = useState<Array<historyEntry>>([])
    const [user, setUser] = useState('guest')
    const [host, setHost] = useState('feenix.term')

    useEffect (() => {
        focusInput()
    }, [input])

    const focusInput = () => {
        document.getElementById('input')?.focus()
    }

    const submitHandler = (submitCommand: string) => {
        if (!commands.includes(submitCommand)) {
            commandHistory.push(submitCommand)
            outputHistory.push({command: submitCommand, output: 'failure'})
            setInput('')
            return
        }
        commandHistory.push(submitCommand)
        outputHistory.push({command: submitCommand, output: 'success'})
        setInput('')
    }

    const inputHandler = (event: KeyboardEvent) => {
        if (event.key.length === 1) {
            setInput(input + event.key)
        }
        if (event.code === 'Backspace'){
            setInput(input.slice(0, -1))
        }
        if (event.code === 'Space') {
            setInput(input + '\xa0')
        }
        if (event.code === 'Enter') {
            submitHandler(input)
        }
    }

    return (
        <span class="outline-none" onKeyDown={inputHandler} id="input" tabIndex={0} onBlur={focusInput}>
            <Output history={outputHistory} user={user} host={host} />
            <Prompt user={user} host={host} />{input}<Caret />
        </span>
    )
}