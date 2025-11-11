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
exports.EventRsvp = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
const event_entity_1 = require("../events/event.entity");
let EventRsvp = class EventRsvp extends base_entity_1.BaseEntity {
    eventId;
    event;
    name;
    email;
    phone;
    guestCount;
    notes;
};
exports.EventRsvp = EventRsvp;
__decorate([
    (0, typeorm_1.Column)({ name: 'event_id' }),
    __metadata("design:type", String)
], EventRsvp.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, (event) => event.rsvps, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", event_entity_1.Event)
], EventRsvp.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], EventRsvp.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 160 }),
    __metadata("design:type", String)
], EventRsvp.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 32, nullable: true }),
    __metadata("design:type", String)
], EventRsvp.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'guest_count', type: 'integer', default: 1 }),
    __metadata("design:type", Number)
], EventRsvp.prototype, "guestCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], EventRsvp.prototype, "notes", void 0);
exports.EventRsvp = EventRsvp = __decorate([
    (0, typeorm_1.Entity)({ name: 'event_rsvps' }),
    (0, typeorm_1.Index)(['eventId', 'email'])
], EventRsvp);
//# sourceMappingURL=event-rsvp.entity.js.map