import { useEffect, useState } from "preact/hooks";
import { Caret } from "../components/Caret.tsx";
import Output, { historyEntry } from "../islands/Output.tsx";
import Prompt from "../islands/Prompt.tsx";
import { banner, commandExists, help } from "../utils/commander.tsx";
import { highlightCommandExists } from "../utils/highlighter.tsx";

export const commands = ['clear', 'help']

export default function Terminal() {
    const [input, setInput] = useState<string>('')
    const [commandHistory, setCommandHistory] = useState<string[]>(['banner'])
    const [outputHistory, setOutputHistory] = useState<Array<historyEntry>>([{command: 'banner', output: banner()}])
    const [user, setUser] = useState<string>('guest')
    const [host, setHost] = useState<string>('feenix.term')

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
        }
    }

    const submitHandler = (command: string) => {
        const commandOutput = commandHandler(command)
        console.log(commandOutput)
        commandHistory.push(command)
        outputHistory.push({command: command, output: commandOutput})
        input !== '' ? setInput('') : setCommandHistory([...commandHistory])
    }

    const commandHandler = (command: string) => {
        let commandOutput = [<></>]

        if (!commandExists(command)){
            setInput('')
            return []
        } 

        switch(command) {
            case 'clear':
                setOutputHistory([])
                break
            case 'help':
                commandOutput = help()
                break
            case 'banner':
                commandOutput = banner()
                break
            case 'default':
                break
        }

        return commandOutput
    }

    return (
        <span class="outline-none" onKeyDown={inputHandler} id="input" tabIndex={0} onBlur={focusInput}>
            <Output history={outputHistory} user={user} host={host} />
            <Prompt user={user} host={host} />{highlightCommandExists(input)}<Caret />
        </span>
    )
}