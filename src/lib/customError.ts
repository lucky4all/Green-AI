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

export class InternalServerError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class ClientError extends Error {
    constructor(message: string) {
        super(message)
    }
}