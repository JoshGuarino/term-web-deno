import { highlightBlue, highlightBoxBlue, highlightBoxRed, highlightBoxWhite, highlightRed } from "./highlighter.tsx"
import config from "../config.json" assert { type: "json" };

export enum Commands {
    clear = 'Reset the terminal output.',
    help = 'Display list of commands.',
    banner = 'Display terminal banner.',
    about = 'Display info about myself.',
    whoami = 'Print username.',
    linkedin = 'Opens linkedin profile page.',
    github = 'Opens github profile page.',
    repo = 'See the code for this application.',
    date = 'Display current datetime.'
}

export const commandExists = (command: string) => {
    if (command === '') return true
    return command in Commands
}

export const commandRouter = (command: string) => {
    switch(command) {
        case 'clear':
            return [<></>]
        case 'help':
            return help()
        case 'banner':
            return banner()
        case 'about':
            return about()
        case 'whoami':
            return whoami()
        case 'linkedin':
            return linkedin()
        case 'github':
            return github()
        case 'repo':
            return repo()
        case 'date':
            return date()
        default:
            return [<></>]
    }
}

export const help = () => {
    return Object.keys(Commands).map((command) => (
        <span>{highlightBoxBlue(command)} {Commands[command as keyof typeof Commands]}</span>
    ))
}

export const banner = () => {
    return [
        <span class="text-4xl">Welcome to {highlightBoxRed('JG Terminal')} !</span>, 
        <img class="border-2 rounded-xl border-red-400 h-1/3 w-1/3" src={config.bannerImage} alt="feenix" />, 
        <span>Type {highlightBoxBlue('help')} to see list of available commands.</span>,
    ]
}

export const about = () => {
    return [
        <h2>Hi I'm {highlightBoxRed('Josh Guarino')}, I'm a Software Engineer!</h2>,
    ]
}

export const whoami = () => {
    return [
        highlightBoxBlue('guest')
    ]
}

export const linkedin = () => {
    setTimeout(() => {
        window.open(`https://www.linkedin.com/in/${config.social.linkedin}`, '_blank');
    }, 500);
    return [
        <span>Opening linkedin profile page.</span>
    ]
}

export const github = () => {
    setTimeout(() => {
        window.open(`https://github.com/${config.social.github}`, '_blank');
    }, 500);
    return [
        <span>Opening github profile page.</span>
    ]
}

export const repo = () => {
    setTimeout(() => {
        window.open('https://github.com/joshguarino/term-web-deno', '_blank');
    }, 500);
    return [
        <span>Opening repo code for terminal.</span>
    ]
}

export const date = () => {
    return [
        <span>{new Date().toString()}</span>
    ]
}