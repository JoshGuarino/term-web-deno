import { useEffect, useState } from "preact/hooks";
import { Caret } from "../components/Caret.tsx";
import Output from "../islands/Output.tsx";
import Prompt from "../islands/Prompt.tsx";
import { banner, commandExists, commandRouter } from "../utils/commander.tsx";
import { highlightCommandExists } from "../utils/highlighter.tsx";
import { historyEntry, terminalProps } from "../utils/types.ts";

export default function Terminal(props: terminalProps) {
    const [input, setInput] = useState<string>('')
    const [commandHistory, setCommandHistory] = useState<string[]>(['banner'])
    const [outputHistory, setOutputHistory] = useState<Array<historyEntry>>([{command: 'banner', output: banner()}])
    const [commIndex, setCommIndex] = useState<number>(0)
    const [user, setUser] = useState<string>(props.user)
    const [host, setHost] = useState<string>(props.host)

    useEffect (() => {
        focusInput()
    }, [input, commandHistory])

    const focusInput = () => {
        document.getElementById('input')?.focus()
    }

    const inputHandler = (event: KeyboardEvent) => {
        if (event.key.length === 1) {
            setInput(input + event.key)
        }
        switch (event.code) {
            case 'Backspace':
                setInput(input.slice(0, -1))
                break
            case 'Space':
                setInput(input + '\xa0')
                break
            case 'Enter':
                submitHandler(input)
                break
            case 'ArrowUp':
                handleArrowUp()
                break
            case 'ArrowDown':
                handleArrowDown()
                break
        }
    }

    const handleArrowUp = () => {
        if (commIndex > 0) {
            setCommIndex(commIndex - 1)
            setInput(commandHistory[commIndex])
            return
        }
        setCommIndex(0)
        setInput(commandHistory[0])
    }

    const handleArrowDown = () => {
        const lastIndex = commandHistory.length - 1
        if (commIndex < lastIndex) {
            setCommIndex(commIndex + 1)
            setInput(commandHistory[commIndex])
            return
        }
        setCommIndex(lastIndex)
        setInput(commandHistory[lastIndex])
    }

    const submitHandler = (command: string) => {
        let output = [<></>]
        commandExists(command) ? output = commandRouter(command) : setInput('')
        if (command === 'clear') {
            setOutputHistory([])
        }
        if (command !== '') {
            commandHistory.push(command)
        }
        outputHistory.push({command: command, output: output})
        input !== '' ? setInput('') : setCommandHistory([...commandHistory])
        setCommIndex(commandHistory.length-1)
    }

    return (
        <span class="outline-none" onKeyDown={inputHandler} id="input" tabIndex={0} onBlur={focusInput}>
            <Output history={outputHistory} user={user} host={host} />
            <Prompt user={user} host={host} />{highlightCommandExists(input)}<Caret />
        </span>
    )
}