export const playAudio = (sound: string) => {
    // const audio: HTMLAudioElement = document.createElement('audio')
    // audio.setAttribute('src', `sounds/${sound}.mp3`)
    // audio.play()

    const audio = document.getElementById(sound) as HTMLAudioElement
    audio.play()
}

export default function Audio() {
    return (
        <>
            <audio id="error" src="sounds/error.mp3"></audio>
            <audio id="warning" src="sounds/warning.mp3"></audio>
            <audio id="ask" src="sounds/ask.mp3"></audio>
            <audio id="ahahah" src="sounds/ahahah.mp3"></audio>
            <audio id="assemble" src="sounds/assemble.mp3"></audio>
        </>
    )
}