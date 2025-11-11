import { BaseEntity } from '../../common/entities/base.entity';
export type MembershipStatus = 'pending' | 'paid' | 'cancelled';
export type MembershipPlan = 'chapter';
export type MembershipPaymentMethod = 'card' | 'paypal' | 'cash';
export declare class Membership extends BaseEntity {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    planType: MembershipPlan;
    paymentMethod: MembershipPaymentMethod;
    amount: number;
    status: MembershipStatus;
    checkoutCompletedAt?: Date | null;
    transactionReference?: string | null;
    notes?: string | null;
}
