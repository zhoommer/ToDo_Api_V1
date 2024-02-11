import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ToDoDto } from "./dto/todo.dto";
import { CustomExeption } from "src/common/exception/customException";

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async addToDo(@Body() dto: ToDoDto) {
    try {
      const todo = await this.prisma.toDo.create({
        data: {
          title: dto.title,
          description: dto.description,
          schedule: dto.schedule,
        },
      });
      return {
        message: "ToDo created successfully",
        data: todo,
        success: true,
      };
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.BAD_REQUEST);
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
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.NOT_FOUND);
    }
  }

  async fetchById(id: number) {
    try {
      const todo = await this.prisma.toDo.findUnique({
        where: { id: id },
      });
      return {
        message: "ToDo fetched",
        data: todo,
        success: true,
      };
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.NOT_FOUND);
    }
  }

  async updateToDo(id: number, @Body() dto: ToDoDto) {
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
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }

  async deleteToDo(id: number) {
    try {
      const todo = await this.prisma.toDo.delete({
        where: { id: id },
      });
      return {
        message: "ToDo deleted successfully",
        data: todo,
        success: true,
      };
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
