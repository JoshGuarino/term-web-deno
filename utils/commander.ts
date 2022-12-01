export enum Commnands {
    clear,
    help,
}

export const commandExists = (command: string) => {
    return command in Commnands
}

export const help = () => {
    return 'help text'
}