import { BaseEntity } from '../../common/entities/base.entity';
export declare class User extends BaseEntity {
    email: string;
    passwordHash: string;
    name?: string;
}
