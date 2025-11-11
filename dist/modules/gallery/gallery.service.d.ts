import { Repository } from 'typeorm';
import { GalleryItem } from './gallery-item.entity';
import { CreateGalleryItemDto } from './dto/create-gallery-item.dto';
import { UpdateGalleryItemDto } from './dto/update-gallery-item.dto';
export declare class GalleryService {
    private readonly galleryRepo;
    constructor(galleryRepo: Repository<GalleryItem>);
    findAll(): Promise<GalleryItem[]>;
    findOne(id: string): Promise<GalleryItem>;
    create(dto: CreateGalleryItemDto): Promise<GalleryItem>;
    update(id: string, dto: UpdateGalleryItemDto): Promise<GalleryItem>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
