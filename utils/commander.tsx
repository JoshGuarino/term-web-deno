import { highlightBlue, highlightBoxBlue, highlightBoxRed, highlightRed } from "./highlighter.tsx"
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
    date = 'Display current datetime.',
    sudo = 'Run command as superuser',
    echo = 'Print out text to terminal.',
    joke = 'Hear a programming joke.'
}

// export const Commands = new Map()

const noArgCommands = ['clear', 'help', 'banner', 'about', 'whoami', 'linkedin', 'github', 'repo', 'date', 'joke']

export const commandExists = (command: string) => {
    if (command === '') return true
    return command in Commands
}

export const commandRouter = async (commandArgs: string[]) => {
    const command = commandArgs[0]
    if (noArgCommands.includes(command) && commandArgs.length > 1) {
        return [
            <span>{highlightBoxRed(config.host)} Command {highlightBlue(command)} takes no arguments.</span>
        ]
    }

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
        case 'sudo':
            return sudo()
        case 'echo':
            return echo(commandArgs)
        case 'joke':
            return await joke()
        default:
            return [<></>]
    }
}

const help = () => {
    return Object.keys(Commands).map(command => (
        <span>{highlightBlue(command)} {Commands[command as keyof typeof Commands]}</span>
    ))
}

export const banner = () => {
    return [
        <span class="text-4xl">Welcome to {highlightRed('JG Terminal')} !</span>, 
        <img class="border-2 rounded-xl border-red-400 h-1/3 w-1/3" src={config.bannerImage} alt="feenix" />, 
        <span>Type {highlightBlue('help')} to see list of available commands.</span>,
    ]
}

const about = () => {
    return [
        <h2>Hi I'm {highlightRed('Josh Guarino')}, I'm a Software Engineer!</h2>,
    ]
}

const whoami = () => {
    return [
        highlightBlue('guest')
    ]
}

const linkedin = () => {
    setTimeout(() => {
        window.open(`https://www.linkedin.com/in/${config.social.linkedin}`, '_blank');
    }, 500)
    return [
        <span>Opening {highlightBlue('linkedin')} profile page.</span>
    ]
}

const github = () => {
    setTimeout(() => {
        window.open(`https://github.com/${config.social.github}`, '_blank');
    }, 500)
    return [
        <span>Opening {highlightBlue('github')} profile page.</span>
    ]
}

const repo = () => {
    setTimeout(() => {
        window.open('https://github.com/joshguarino/term-web-deno', '_blank');
    }, 500)
    return [
        <span>Opening {highlightRed('repo')} code for terminal.</span>
    ]
}

const date = () => {
    return [
        <span>{new Date().toString()}</span>
    ]
}

const sudo = () => {
    return [
        <span>{highlightBoxRed(config.host)} Permission denied.</span>,
        <img class="border-2 rounded-xl" src="dennis-jurassic-park.gif" alt="dennis" /> 
    ]
}

const echo = (commandArgs: string[]) => {
    commandArgs.shift()
    return [
        <span>{commandArgs.map(arg => `${arg} `)}</span>
    ]
}

const joke = async () => {
    const response = await fetch('/api/joke')
    if (response.status !== 200) {
        return [
            <span>{highlightBoxRed(config.host)} Error, status code of {highlightRed(String(response.status))}.</span>
        ]
    }
    return [
        <span>{await response.text()}</span>
    ]
}