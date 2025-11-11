import { BaseEntity } from '../../common/entities/base.entity';
export type PageSectionName = 'home' | 'about';
export declare class PageSection extends BaseEntity {
    page: PageSectionName;
    title: string;
    heading: string;
    description?: string;
    imageUrl?: string | null;
    displayOrder: number;
}
