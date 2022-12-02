import { commandExists } from "./commander.tsx";

export const highlightBlue = (text: string) => {
    return <span class="text-blue-400">{text}</span>
}

export const highlightRed = (text: string) => {
    return <span class="text-red-400">{text}</span>
}

export const highlightGreen = (text: string) => {
    return <span class="text-green-400">{text}</span>
}

export const highlightCommandExists = (command: string) => {
    return commandExists(command) ? highlightGreen(command) : highlightRed(command)
}