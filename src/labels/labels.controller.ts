import { Body, Controller, Get, Post } from "@nestjs/common";
import { LabelsService } from "./labels.service";
import { LabelsDto } from "./dto/labels.dto";

@Controller("api/v1")
export class LabelsController {
  constructor(private labelServices: LabelsService) {}

  @Post("/add-label")
  addLabel(@Body() dto: LabelsDto) {
    return this.labelServices.addLabels(dto);
  }

  @Get("/labels")
  fetchAll() {
    return this.labelServices.fetchAllLabels();
  }
}
