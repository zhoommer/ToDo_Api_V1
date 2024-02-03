import { Body, Controller, Param, Patch, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { ToDoDto } from "./dto/todo.dto";

@Controller("api/v1")
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post("/add-todo")
  addToDo(@Body() dto: ToDoDto) {
    return this.todoService.addToDo(dto);
  }

  @Patch("/update-todo/:id")
  updateToDo(@Param("id") id: string, @Body() dto: ToDoDto) {
    return this.todoService.updateToDo(+id, dto);
  }
}
