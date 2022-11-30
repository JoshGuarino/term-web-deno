import Prompt from "../islands/Prompt.tsx";
import { useEffect, useState } from "preact/hooks";
import { commands } from "../islands/Input.tsx"

interface outputProps {
    history: Array<historyEntry>
    user: string
    host: string
}

export interface historyEntry {
    command: string
    output: string
}

export default function Output(props: outputProps) {
    return(
        <div>
            {props.history.map( entry => (
                    <>
                    <div>
                        <Prompt user={props.user} host={props.host}/>{entry.command}
                    </div>
                    <div>
                        { !commands.includes(entry.command) ? `feenix: command not found: ${entry.command}` : `${entry.output}` }
                    </div>
                    </>
                )
            )}
        </div>
    )
}