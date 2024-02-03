"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomExeption = void 0;
const common_1 = require("@nestjs/common");
class CustomExeption extends common_1.HttpException {
    constructor(message, statusCode) {
        super(message, statusCode);
    }
}
exports.CustomExeption = CustomExeption;
//# sourceMappingURL=customException.js.map