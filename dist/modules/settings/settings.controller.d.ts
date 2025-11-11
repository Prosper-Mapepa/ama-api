import { SettingsService } from './settings.service';
import { UpsertSettingDto } from './dto/upsert-setting.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): Promise<import("./setting.entity").Setting[]>;
    findOne(key: string): Promise<import("./setting.entity").Setting>;
    upsert(dto: UpsertSettingDto): Promise<import("./setting.entity").Setting>;
    remove(key: string): Promise<{
        deleted: boolean;
    }>;
}
