export enum Commnands {
    clear,
    help,
}

export const commandExists = (command: string) => {
    return command in Commnands
}

export const syntaxHighlighter = (command: string) => {
    const highlight = commandExists(command) ? 'text-green-400' : 'text-red-400'

    return <span class={highlight}>{command}</span>
}

export const help = () => {
    return 'help text'
}