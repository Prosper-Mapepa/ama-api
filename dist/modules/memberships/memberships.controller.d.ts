import { MembershipsService } from './memberships.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipStatusDto } from './dto/update-membership-status.dto';
export declare class MembershipsController {
    private readonly membershipsService;
    constructor(membershipsService: MembershipsService);
    findAll(): Promise<import("./membership.entity").Membership[]>;
    create(dto: CreateMembershipDto): Promise<import("./membership.entity").Membership>;
    updateStatus(id: string, dto: UpdateMembershipStatusDto): Promise<import("./membership.entity").Membership>;
}
