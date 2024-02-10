import { PrismaService } from "src/prisma/prisma.service";
import { LabelsDto } from "./dto/labels.dto";
export declare class LabelsService {
    private prisma;
    constructor(prisma: PrismaService);
    addLabel(dto: LabelsDto): Promise<void>;
}
