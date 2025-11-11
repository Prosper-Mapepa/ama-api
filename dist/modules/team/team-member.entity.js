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
exports.TeamMember = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
let TeamMember = class TeamMember extends base_entity_1.BaseEntity {
    name;
    role;
    major;
    bio;
    email;
    linkedin;
    imageUrl;
    displayOrder;
};
exports.TeamMember = TeamMember;
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], TeamMember.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], TeamMember.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 160, nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "major", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 160, nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "linkedin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], TeamMember.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'display_order', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], TeamMember.prototype, "displayOrder", void 0);
exports.TeamMember = TeamMember = __decorate([
    (0, typeorm_1.Entity)({ name: 'team_members' })
], TeamMember);
//# sourceMappingURL=team-member.entity.js.map