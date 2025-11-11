import { Repository } from 'typeorm';
import { TeamMember } from './team-member.entity';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
export declare class TeamService {
    private readonly teamRepo;
    constructor(teamRepo: Repository<TeamMember>);
    findAll(): Promise<TeamMember[]>;
    findOne(id: string): Promise<TeamMember>;
    create(dto: CreateTeamMemberDto): Promise<TeamMember>;
    update(id: string, dto: UpdateTeamMemberDto): Promise<TeamMember>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
