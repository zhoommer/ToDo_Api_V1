import { Body, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { LabelsDto } from "./dto/labels.dto";

@Injectable()
export class LabelsService {
  constructor(private prisma: PrismaService) {}

  async addLabel(@Body() dto: LabelsDto) {
    try {
    } catch (error) {}
  }
}
