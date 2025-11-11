import { Repository } from 'typeorm';
import { User } from './user.entity';
export interface CreateAdminOptions {
    email: string;
    password: string;
    name?: string;
}
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    createAdmin(options: CreateAdminOptions): Promise<User>;
}
