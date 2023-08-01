import { highlightCommandExists } from "../utils/highlighter.tsx";
import { inputProps } from "../utils/types.ts";

export default function Input(props: inputProps) {
    const commandArgs =  props.command.split('\xa0')
    return <span>{highlightCommandExists(commandArgs[0])}{props.command.slice(commandArgs[0].length, props.command.length)}</span>
}