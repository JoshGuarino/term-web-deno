import { useEffect, useState } from "preact/hooks";
import { Caret } from "../components/Caret.tsx";
import Output from "../islands/Output.tsx";
import Prompt from "../islands/Prompt.tsx";
import { banner, commandExists, commandRouter } from "../utils/commander.tsx";
import { highlightCommandExists } from "../utils/highlighter.tsx";
import { LinkedList } from "../utils/linkedList.ts";
import { historyEntry, terminalProps } from "../utils/types.ts";

export default function Terminal(props: terminalProps) {
    const [input, setInput] = useState<string>('')
    const [outputHistory, setOutputHistory] = useState<Array<historyEntry>>([{command: 'banner', output: banner()}])
    const [user, setUser] = useState<string>(props.user)
    const [commandHistory, setCommandHistory] = useState<LinkedList>(new LinkedList('banner'))

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
        if (commandHistory.current === commandHistory.tail && input !== commandHistory.tail.data) {
            setInput(commandHistory.tail!.data)
            return
        }
        commandHistory.traverseBack()
        setInput(commandHistory.current!.data)
    }

    const handleArrowDown = () => {
        if (commandHistory.current === commandHistory.tail) {
            setInput('')
            return
        }
        commandHistory.traverseForward()
        setInput(commandHistory.current!.data)
    }

    const submitHandler = (command: string) => {
        let output = [<></>]
        const commandArgs = command.split('\xa0').filter(x => x !== '')
        commandExists(command) ? output = commandRouter(commandArgs) : setInput('')
        if (commandArgs[0] === 'clear' && commandArgs.length === 1) {
            setOutputHistory([])
        }
        if (command !== '') {
            commandHistory.addNode(command)
        }
        outputHistory.push({command: command, output: output})
        input !== '' ? setInput('') : setOutputHistory([...outputHistory])
    }

    const displayInput = (command: string) => {
        const commandArgs =  command.split('\xa0')
        return <span>{highlightCommandExists(commandArgs[0])}{command.slice(commandArgs[0].length, command.length)}</span>
    }

    return (
        <span class="outline-none" onKeyDown={inputHandler} id="input" tabIndex={0} onBlur={focusInput}>
            <Output history={outputHistory} user={user} host={props.host} />
            <Prompt user={user} host={props.host} />
            {displayInput(input)}
            <Caret />
        </span>
    )
}