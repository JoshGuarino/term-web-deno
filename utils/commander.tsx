import { highlightBlue, highlightGreen, highlightRed } from "./highlighter.tsx"

export enum Commands {
    clear = 'Clear the terminal output',
    help = 'Display list of commands',
    banner = 'Display terminal banner',
}

export const commandExists = (command: string) => {
    if (command === '') return true
    return command in Commands
}

export const help = () => {
    return Object.keys(Commands).map((command) => (
        <span>{highlightBlue(command)} - {Commands[command as keyof typeof Commands]}</span>
    ))
}

export const banner = () => {
    return [
        <span class="text-4xl">Welcome to {highlightRed('JG Terminal')}!</span>, 
        <img class="border-2 rounded-xl border-red-400" src="feenix.jpg" alt="feenix" height="500px" width="500px" />, 
        <span>Type '{highlightBlue('help')}' to see list of available commands.</span>,
    ]
}