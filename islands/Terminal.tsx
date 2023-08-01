import { useEffect, useState } from "preact/hooks";
import { Caret } from "../components/Caret.tsx";
import Output from "../islands/Output.tsx";
import Input from "./Input.tsx";
import Prompt from "../islands/Prompt.tsx";
import { banner, commandExists, commandRouter } from "../utils/commander.tsx";
import { LinkedList } from "../utils/linkedList.ts";
import { historyEntry, terminalProps } from "../utils/types.ts";
import { playAudio } from "../utils/audio.ts"

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
        document.getElementById('terminal')?.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
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

    const submitHandler = async (command: string) => {
        if (command === ''){
            playAudio('error')
            return
        }

        let output = [<></>]
        const commandArgs = command.split('\xa0').filter(x => x !== '')
        const validCommand = commandExists(commandArgs[0])

        if (validCommand) {
            output = await commandRouter(commandArgs)
        } else {
            setInput('')
            playAudio('warning')
        }

        if (commandArgs[0] === 'clear' && commandArgs.length === 1) {
            setOutputHistory([])
            playAudio('ask')
        } 
        else if (commandArgs[0] === 'sudo') {
            playAudio('ahahah')
        } else if (validCommand) {
            playAudio('assemble')
        }

        commandHistory.addNode(command)
        outputHistory.push({command: command, output: output})
        input !== '' ? setInput('') : setOutputHistory([...outputHistory])
    }

    return (
        <div id="terminal" class="bg-black opacity-80 border-2 rounded-lg h-full w-full p-2 overflow-auto">
            <span class="outline-none" onKeyDown={inputHandler} id="input" tabIndex={0} onBlur={focusInput}>
                <Output history={outputHistory} user={user} host={props.host} />
                <Prompt user={user} host={props.host} />
                <Input command={input}></Input>
                <Caret />
            </span>
        </div>
    )
}