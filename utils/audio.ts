export const playAudio = (sound: string) => {
    const audio: HTMLAudioElement = document.createElement('audio')
    audio.setAttribute('src', `sounds/${sound}.mp3`)
    audio.play()
}