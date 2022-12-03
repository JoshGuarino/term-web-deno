import { highlightBlue, highlightGreen, highlightRed } from "./highlighter.tsx"

export enum Commands {
    clear = 'Clear the terminal output',
    help = 'Display list of commands',
    banner = 'Display terminal banner',
    about = 'Display info about myself',
    whoami = 'Print username',
}

export const commandExists = (command: string) => {
    if (command === '') return true
    return command in Commands
}

export const commandRouter = (command: string) => {
    switch(command) {
        case 'clear':
            return [<></>]
        case 'help':
            return help()
        case 'banner':
            return banner()
        case 'about':
            return about()
        case 'whoami':
            return whoami()
        default:
            return [<></>]
    }
}

export const help = () => {
    return Object.keys(Commands).map((command) => (
        <span>{command} - {Commands[command as keyof typeof Commands]}</span>
    ))
}

export const banner = () => {
    return [
        <span class="text-4xl">Welcome to {highlightRed('JG Terminal')}!</span>, 
        <img class="border-2 rounded-xl border-red-400 h-1/3 w-1/3" src="feenix.jpg" alt="feenix" />, 
        <span>Type '{highlightBlue('help')}' to see list of available commands.</span>,
    ]
}

export const about = () => {
    return [
        <h2>Hi I'm <span>{highlightBlue('Josh Guarino')}</span>,</h2>,
        <h2>I'm a Software Engineer and IT professional!</h2>,
    ]
}

export const whoami = () => {
    return [
        <>guest</>
    ]
}