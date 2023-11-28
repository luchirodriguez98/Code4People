class HttpError extends Error {
    constructor(statusCode, massage) {
        super(message);
        this.statusCode = statusCode;
    }
}

export { HttpError };