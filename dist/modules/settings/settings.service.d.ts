import { Repository } from 'typeorm';
import { Setting } from './setting.entity';
import { UpsertSettingDto } from './dto/upsert-setting.dto';
export declare class SettingsService {
    private readonly settingsRepo;
    constructor(settingsRepo: Repository<Setting>);
    findAll(): Promise<Setting[]>;
    findOne(key: string): Promise<Setting>;
    upsert(dto: UpsertSettingDto): Promise<Setting>;
    remove(key: string): Promise<{
        deleted: boolean;
    }>;
}
