export interface terminalProps {
    user: string
    host: string
}

export interface outputProps {
    history: Array<historyEntry>
    user: string
    host: string
}

export interface inputProps {
    command: string
}

export interface propmptProps {
    user: string
    host: string
}

export interface historyEntry {
    command: string
    output: preact.JSX.Element[]
}