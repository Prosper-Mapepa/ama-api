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
exports.Membership = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../common/entities/base.entity");
let Membership = class Membership extends base_entity_1.BaseEntity {
    firstName;
    lastName;
    email;
    phone;
    planType;
    paymentMethod;
    amount;
    status;
    checkoutCompletedAt;
    transactionReference;
    notes;
};
exports.Membership = Membership;
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar', length: 80 }),
    __metadata("design:type", String)
], Membership.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar', length: 80 }),
    __metadata("design:type", String)
], Membership.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 160 }),
    __metadata("design:type", String)
], Membership.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 32, nullable: true }),
    __metadata("design:type", String)
], Membership.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'plan_type', type: 'varchar', length: 32 }),
    __metadata("design:type", String)
], Membership.prototype, "planType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_method', type: 'varchar', length: 24, default: 'card' }),
    __metadata("design:type", String)
], Membership.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Membership.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 24, default: 'pending' }),
    __metadata("design:type", String)
], Membership.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'checkout_completed_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], Membership.prototype, "checkoutCompletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transaction_reference', type: 'varchar', length: 120, nullable: true }),
    __metadata("design:type", Object)
], Membership.prototype, "transactionReference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Membership.prototype, "notes", void 0);
exports.Membership = Membership = __decorate([
    (0, typeorm_1.Entity)({ name: 'memberships' }),
    (0, typeorm_1.Index)(['email', 'planType'])
], Membership);
//# sourceMappingURL=membership.entity.js.map