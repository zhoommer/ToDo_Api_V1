import { TodoService } from "./todo.service";
import { ToDoDto } from "./dto/todo.dto";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    addToDo(dto: ToDoDto): Promise<{
        message: string;
        data: {
            id: number;
            title: string;
            description: string;
            label: string;
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        };
        success: boolean;
    }>;
    updateToDo(id: string, dto: ToDoDto): Promise<{
        message: string;
        data: {
            id: number;
            title: string;
            description: string;
            label: string;
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        };
        success: boolean;
    }>;
}
