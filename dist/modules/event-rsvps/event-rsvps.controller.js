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
exports.EventRsvpsController = void 0;
const common_1 = require("@nestjs/common");
const event_rsvps_service_1 = require("./event-rsvps.service");
const create_event_rsvp_dto_1 = require("./dto/create-event-rsvp.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let EventRsvpsController = class EventRsvpsController {
    eventRsvpsService;
    constructor(eventRsvpsService) {
        this.eventRsvpsService = eventRsvpsService;
    }
    findAll(eventId) {
        return this.eventRsvpsService.findByEvent(eventId);
    }
    create(eventId, dto) {
        return this.eventRsvpsService.create(eventId, dto);
    }
};
exports.EventRsvpsController = EventRsvpsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventRsvpsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('eventId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_event_rsvp_dto_1.CreateEventRsvpDto]),
    __metadata("design:returntype", void 0)
], EventRsvpsController.prototype, "create", null);
exports.EventRsvpsController = EventRsvpsController = __decorate([
    (0, common_1.Controller)('events/:eventId/rsvps'),
    __metadata("design:paramtypes", [event_rsvps_service_1.EventRsvpsService])
], EventRsvpsController);
//# sourceMappingURL=event-rsvps.controller.js.map