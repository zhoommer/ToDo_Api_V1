import { PrismaService } from "src/prisma/prisma.service";
import { ToDoDto } from "./dto/todo.dto";
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
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
    fetchAll(): Promise<{
        message: string;
        data: {
            id: number;
            title: string;
            description: string;
            label: string;
            schedule: Date;
            createdAt: Date;
            updatedAt: Date;
        }[];
        success: boolean;
    }>;
    fetchById(id: number): Promise<{
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
    updateToDo(id: number, dto: ToDoDto): Promise<{
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
