import { TeamService } from './team.service';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    findAll(): Promise<import("./team-member.entity").TeamMember[]>;
    create(dto: CreateTeamMemberDto): Promise<import("./team-member.entity").TeamMember>;
    update(id: string, dto: UpdateTeamMemberDto): Promise<import("./team-member.entity").TeamMember>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
