class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    constructor(message: string, StatusCode = 400) {
        this.message = message;
        this.statusCode = this.statusCode;
    }
}

export default AppError;