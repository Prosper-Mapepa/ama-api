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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItem = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
let GalleryItem = class GalleryItem extends base_entity_1.BaseEntity {
    url;
    title;
    category;
    caption;
    displayOrder;
};
exports.GalleryItem = GalleryItem;
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], GalleryItem.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 160 }),
    __metadata("design:type", String)
], GalleryItem.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], GalleryItem.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 180, nullable: true }),
    __metadata("design:type", String)
], GalleryItem.prototype, "caption", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_order', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], GalleryItem.prototype, "displayOrder", void 0);
exports.GalleryItem = GalleryItem = __decorate([
    (0, typeorm_1.Entity)({ name: 'gallery_items' })
], GalleryItem);
//# sourceMappingURL=gallery-item.entity.js.map