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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const todo_dto_1 = require("./dto/todo.dto");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    addToDo(dto) {
        return this.todoService.addToDo(dto);
    }
    updateToDo(id, dto) {
        return this.todoService.updateToDo(+id, dto);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Post)("/add-todo"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_dto_1.ToDoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "addToDo", null);
__decorate([
    (0, common_1.Patch)("/update-todo/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, todo_dto_1.ToDoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updateToDo", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)("api/v1"),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map