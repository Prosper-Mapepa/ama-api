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
exports.PageSectionsController = void 0;
const common_1 = require("@nestjs/common");
const page_sections_service_1 = require("./page-sections.service");
const create_page_section_dto_1 = require("./dto/create-page-section.dto");
const update_page_section_dto_1 = require("./dto/update-page-section.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let PageSectionsController = class PageSectionsController {
    pageSectionsService;
    constructor(pageSectionsService) {
        this.pageSectionsService = pageSectionsService;
    }
    findAll(page) {
        if (!page) {
            throw new common_1.BadRequestException('Query parameter "page" is required');
        }
        const normalized = page.toLowerCase();
        if (normalized !== 'home' && normalized !== 'about') {
            throw new common_1.BadRequestException(`Unsupported page "${page}"`);
        }
        return this.pageSectionsService.findAllByPage(normalized);
    }
    create(dto) {
        return this.pageSectionsService.create(dto);
    }
    update(id, dto) {
        return this.pageSectionsService.update(id, dto);
    }
    remove(id) {
        return this.pageSectionsService.remove(id);
    }
};
exports.PageSectionsController = PageSectionsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PageSectionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_page_section_dto_1.CreatePageSectionDto]),
    __metadata("design:returntype", void 0)
], PageSectionsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_page_section_dto_1.UpdatePageSectionDto]),
    __metadata("design:returntype", void 0)
], PageSectionsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PageSectionsController.prototype, "remove", null);
exports.PageSectionsController = PageSectionsController = __decorate([
    (0, common_1.Controller)('page-sections'),
    __metadata("design:paramtypes", [page_sections_service_1.PageSectionsService])
], PageSectionsController);
//# sourceMappingURL=page-sections.controller.js.map