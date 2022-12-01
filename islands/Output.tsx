import Prompt from "../islands/Prompt.tsx";
import { useEffect, useState } from "preact/hooks";
import { commandExists } from "../utils/commander.ts";

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
                            { !commandExists(entry.command) ? `feenix: command '${entry.command}' not found` : `${entry.output}` }
                        </div>
                    </>
                )
            )}
        </div>
    )
}