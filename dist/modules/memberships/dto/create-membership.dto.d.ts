import type { MembershipPaymentMethod, MembershipPlan } from '../membership.entity';
export declare class CreateMembershipDto {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    planType: MembershipPlan;
    paymentMethod: MembershipPaymentMethod;
    amount: number;
    transactionReference?: string;
    notes?: string;
}
