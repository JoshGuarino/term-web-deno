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

export const highlightBoxBlue = (text: string) => {
    return <span class="text-white bg-blue-400 rounded p-0.5">{text}</span>
}

export const highlightBoxRed = (text: string) => {
    return <span class="text-gray-800 bg-red-400 rounded p-0.5">{text}</span>
}

export const highlightBoxWhite = (text: string) => {
    return <span class="text-blue-400 bg-white rounded p-0.5">{text}</span>
}
