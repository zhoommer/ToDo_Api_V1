import { PrismaService } from "src/prisma/prisma.service";
import { LabelsDto } from "./dto/labels.dto";
export declare class LabelsService {
    private prisma;
    constructor(prisma: PrismaService);
    addLabels(dto: LabelsDto): Promise<{
        message: string;
        data: {
            id: number;
            label: string;
            color: string;
            toDoId: number;
        };
        success: boolean;
    }>;
    fetchAllLabels(): Promise<{
        id: number;
        label: string;
        color: string;
        toDoId: number;
    }[]>;
}
