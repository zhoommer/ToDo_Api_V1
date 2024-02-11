import { LabelsService } from "./labels.service";
import { LabelsDto } from "./dto/labels.dto";
export declare class LabelsController {
    private labelServices;
    constructor(labelServices: LabelsService);
    addLabel(dto: LabelsDto): Promise<{
        message: string;
        data: {
            id: number;
            label: string;
            color: string;
            toDoId: number;
        };
        success: boolean;
    }>;
    fetchAll(): Promise<{
        id: number;
        label: string;
        color: string;
        toDoId: number;
    }[]>;
}
