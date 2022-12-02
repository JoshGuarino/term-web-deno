import Prompt from "../islands/Prompt.tsx";
import { commandExists } from "../utils/commander.tsx";
import { highlightCommandExists, highlightBlue, highlightGreen, highlightRed } from "../utils/highlighter.tsx";

interface outputProps {
    history: Array<historyEntry>
    user: string
    host: string
}

export interface historyEntry {
    command: string
    output: preact.JSX.Element[]
}

export default function Output(props: outputProps) {
    return(
        <div>
            {props.history.map( entry => (
                    <div>
                        <div>
                            <Prompt user={props.user} host={props.host}/>{entry.command}
                        </div>
                            { 
                                commandExists(entry.command) ?
                                entry.output.map(entry =><div class="m-4">{entry}</div>) :
                                <div class="m-4">{highlightRed(props.host)}: command '{highlightRed(entry.command)}' not found, type '{highlightBlue('help')}' for commands.</div>
                            }
                    </div>
                )
            )}
        </div>
    )
}