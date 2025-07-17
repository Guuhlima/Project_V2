import { AppError } from "./AppError";

export class UnauthorizedError extends AppError {
    constructor(resource = 'Recurso') {
        super(`${resource} não autorizado.`, 401);
    }
}