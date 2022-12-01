export enum Commnands {
    clear = 'clear',
    help = 'help',
}

export const commandExists = (command: string) => {
    return command in Commnands
}

export const commandRouter = (command: string) => {
    return command
}