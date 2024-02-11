"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const customException_1 = require("../common/exception/customException");
const labels_dto_1 = require("./dto/labels.dto");
let LabelsService = class LabelsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addLabels(dto) {
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
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fetchAllLabels() {
        try {
            const labels = this.prisma.labels.findMany();
            return labels;
        }
        catch (error) {
            throw new customException_1.CustomExeption(`${error}`, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.LabelsService = LabelsService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [labels_dto_1.LabelsDto]),
    __metadata("design:returntype", Promise)
], LabelsService.prototype, "addLabels", null);
exports.LabelsService = LabelsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LabelsService);
//# sourceMappingURL=labels.service.js.map