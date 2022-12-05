import Prompt from "../islands/Prompt.tsx";
import { commandExists } from "../utils/commander.tsx";
import { highlightBlue, highlightBoxRed, highlightRed } from "../utils/highlighter.tsx";
import { outputProps } from "../utils/types.ts";

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
                                <div class="m-4">{highlightBoxRed(props.host)} Command {highlightRed(entry.command)} not found, type '{highlightBlue('help')}' for commands.</div>
                            }
                    </div>
                )
            )}
        </div>
    )
}