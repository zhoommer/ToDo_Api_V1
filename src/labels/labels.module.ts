import { Module } from "@nestjs/common";
import { LabelsService } from "./labels.service";
import { LabelsController } from "./labels.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  providers: [LabelsService, PrismaService],
  controllers: [LabelsController],
})
export class LabelsModule {}
