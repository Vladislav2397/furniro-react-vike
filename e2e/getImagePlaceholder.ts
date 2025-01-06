type Options = {
    size: `${number}x${number}`
    backgroundColor: string
    textColor: string
}

export function getImagePlaceholder(options?: Partial<Options>) {
    const config: Options = {
        size: '600x400',
        backgroundColor: '232323',
        textColor: 'FFFFFF',
        ...options,
    }

    return `https://placehold.co/${config.size}/${config.backgroundColor}/${config.textColor}.png`
}
