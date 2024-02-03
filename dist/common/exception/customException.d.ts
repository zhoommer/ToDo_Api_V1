import { HttpException } from "@nestjs/common";
export declare class CustomExeption extends HttpException {
    constructor(message: string, statusCode: number);
}
