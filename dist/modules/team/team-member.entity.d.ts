import { BaseEntity } from '../../common/entities/base.entity';
export declare class TeamMember extends BaseEntity {
    name: string;
    role: string;
    major?: string;
    bio?: string;
    email?: string;
    linkedin?: string;
    imageUrl?: string | null;
    displayOrder: number;
}
