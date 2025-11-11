import { BaseEntity } from '../../common/entities/base.entity';
export declare class GalleryItem extends BaseEntity {
    url: string;
    title: string;
    category: string;
    caption?: string;
    displayOrder: number;
}
