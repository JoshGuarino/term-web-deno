import { useEffect, useState } from "preact/hooks";

export default function Input() {
    const [value, setValue] = useState('')
    const [inputSize, setInputSize] = useState(1)

    const inputHandler = (event: Event) => {
    
        console.log(event)
    }

    const onKeyEvent = (event: KeyboardEvent) => {
        if (event.key.length === 1) {
            setValue(value + event.key)
            setInputSize(value.length)
            console.log(value)
        }
    }

    return (
        <>
            <input 
                class="bg-black text-white appearance-none flex-grow" 
                type="text"
                value={value}
                onChange={inputHandler}
                onKeyDown={onKeyEvent}
                size={inputSize}
            />
        </>
    )
}