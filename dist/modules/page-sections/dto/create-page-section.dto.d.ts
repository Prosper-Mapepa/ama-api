import { PageSectionName } from '../page-section.entity';
export declare class CreatePageSectionDto {
    page: PageSectionName;
    title: string;
    heading: string;
    description?: string;
    imageUrl?: string | null;
    displayOrder?: number;
}
