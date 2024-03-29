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
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        };
        success: boolean;
    }>;
    fetchAllToDo(): Promise<{
        message: string;
        data: ({
            labels: {
                id: number;
                label: string;
                color: string;
                toDoId: number;
            }[];
        } & {
            id: number;
            title: string;
            description: string;
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        })[];
        success: boolean;
    }>;
    fetchById(id: string): Promise<{
        message: string;
        data: {
            id: number;
            title: string;
            description: string;
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
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        };
        success: boolean;
    }>;
    deleteToDo(id: string): Promise<{
        message: string;
        data: {
            id: number;
            title: string;
            description: string;
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        };
        success: boolean;
    }>;
}
