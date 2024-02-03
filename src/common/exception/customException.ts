import { HttpException } from "@nestjs/common";

export class CustomExeption extends HttpException {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}
