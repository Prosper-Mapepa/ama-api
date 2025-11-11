"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRsvpsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_rsvp_entity_1 = require("./event-rsvp.entity");
const event_rsvps_service_1 = require("./event-rsvps.service");
const event_rsvps_controller_1 = require("./event-rsvps.controller");
let EventRsvpsModule = class EventRsvpsModule {
};
exports.EventRsvpsModule = EventRsvpsModule;
exports.EventRsvpsModule = EventRsvpsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([event_rsvp_entity_1.EventRsvp])],
        controllers: [event_rsvps_controller_1.EventRsvpsController],
        providers: [event_rsvps_service_1.EventRsvpsService],
        exports: [event_rsvps_service_1.EventRsvpsService],
    })
], EventRsvpsModule);
//# sourceMappingURL=event-rsvps.module.js.map