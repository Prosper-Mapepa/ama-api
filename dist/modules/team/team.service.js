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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_member_entity_1 = require("./team-member.entity");
let TeamService = class TeamService {
    teamRepo;
    constructor(teamRepo) {
        this.teamRepo = teamRepo;
    }
    findAll() {
        return this.teamRepo.find({
            order: { displayOrder: 'ASC', createdAt: 'ASC' },
        });
    }
    async findOne(id) {
        const member = await this.teamRepo.findOne({ where: { id } });
        if (!member) {
            throw new common_1.NotFoundException(`Team member ${id} not found`);
        }
        return member;
    }
    create(dto) {
        const member = this.teamRepo.create({
            ...dto,
            displayOrder: dto.displayOrder ?? 0,
        });
        return this.teamRepo.save(member);
    }
    async update(id, dto) {
        const member = await this.findOne(id);
        Object.assign(member, dto);
        return this.teamRepo.save(member);
    }
    async remove(id) {
        const member = await this.findOne(id);
        await this.teamRepo.remove(member);
        return { deleted: true };
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_member_entity_1.TeamMember)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamService);
//# sourceMappingURL=team.service.js.map