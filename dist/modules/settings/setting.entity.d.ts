import { BaseEntity } from '../../common/entities/base.entity';
export declare class Setting extends BaseEntity {
    key: string;
    value: Record<string, unknown> | null;
}
