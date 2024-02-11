import { Body, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CustomExeption } from "src/common/exception/customException";
import { LabelsDto } from "./dto/labels.dto";

@Injectable()
export class LabelsService {
  constructor(private prisma: PrismaService) {}

  async addLabels(@Body() dto: LabelsDto) {
    try {
      const label = await this.prisma.labels.create({
        data: {
          label: dto.label,
          color: dto.color,
          toDoId: null,
        },
      });
      return {
        message: "Label created successfully",
        data: label,
        success: true,
      };
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }

  async fetchAllLabels() {
    try {
      const labels = this.prisma.labels.findMany();
      return labels;
    } catch (error) {
      throw new CustomExeption(`${error}`, HttpStatus.NOT_FOUND);
    }
  }
}
