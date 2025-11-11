import type { MembershipStatus } from '../membership.entity';
export declare class UpdateMembershipStatusDto {
    status: MembershipStatus;
    transactionReference?: string;
}
