import { Repository } from 'typeorm';
import { Membership } from './membership.entity';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipStatusDto } from './dto/update-membership-status.dto';
export declare class MembershipsService {
    private readonly membershipRepo;
    constructor(membershipRepo: Repository<Membership>);
    findAll(): Promise<Membership[]>;
    findOne(id: string): Promise<Membership>;
    create(dto: CreateMembershipDto): Promise<Membership>;
    updateStatus(id: string, dto: UpdateMembershipStatusDto): Promise<Membership>;
}
