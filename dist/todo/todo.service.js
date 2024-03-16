"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const todo_dto_1 = require("./dto/todo.dto");
const customException_1 = require("../common/exception/customException");
let TodoService = class TodoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addToDo(dto) {
        try {
            const todo = await this.prisma.toDo.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    labels: dto.label,
                    schedule: dto.schedule,
                },
            });
            return {
                message: "ToDo created successfully",
                data: todo,
                success: true,
            };
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchAll() {
        try {
            const todos = await this.prisma.toDo.findMany({
                include: {
                    labels: true,
                },
            });
            return {
                message: "All ToDos fetched",
                data: todos,
                success: true,
            };
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async fetchById(id) {
        try {
            const todo = await this.prisma.toDo.findUnique({
                where: { id: id },
            });
            return {
                message: "ToDo fetched",
                data: todo,
                success: true,
            };
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async updateToDo(id, dto) {
        try {
            const todo = await this.prisma.toDo.update({
                where: { id: id },
                data: {
                    title: dto.title,
                    description: dto.description,
                    schedule: dto.schedule,
                },
            });
            return {
                message: "ToDo updated successfully",
                data: todo,
                success: true,
            };
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteToDo(id) {
        try {
            const todo = await this.prisma.toDo.delete({
                where: { id: id },
            });
            return {
                message: "ToDo deleted successfully",
                data: todo,
                success: true,
            };
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TodoService = TodoService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.ToDoDto]),
    __metadata("design:returntype", Promise)
], TodoService.prototype, "addToDo", null);
__decorate([
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, todo_dto_1.ToDoDto]),
    __metadata("design:returntype", Promise)
], TodoService.prototype, "updateToDo", null);
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoService);
//# sourceMappingURL=todo.service.js.map