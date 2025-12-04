export class UnauthorizedError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class ExternalAiError extends Error {
    constructor(message: string) {
        super(message)
    }
}