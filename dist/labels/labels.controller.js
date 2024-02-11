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
exports.LabelsController = void 0;
const common_1 = require("@nestjs/common");
const labels_service_1 = require("./labels.service");
const labels_dto_1 = require("./dto/labels.dto");
let LabelsController = class LabelsController {
    constructor(labelServices) {
        this.labelServices = labelServices;
    }
    addLabel(dto) {
        return this.labelServices.addLabels(dto);
    }
    fetchAll() {
        return this.labelServices.fetchAllLabels();
    }
};
exports.LabelsController = LabelsController;
__decorate([
    (0, common_1.Post)("/add-label"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [labels_dto_1.LabelsDto]),
    __metadata("design:returntype", void 0)
], LabelsController.prototype, "addLabel", null);
__decorate([
    (0, common_1.Get)("/labels"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LabelsController.prototype, "fetchAll", null);
exports.LabelsController = LabelsController = __decorate([
    (0, common_1.Controller)("api/v1"),
    __metadata("design:paramtypes", [labels_service_1.LabelsService])
], LabelsController);
//# sourceMappingURL=labels.controller.js.map