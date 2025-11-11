import { GalleryService } from './gallery.service';
import { CreateGalleryItemDto } from './dto/create-gallery-item.dto';
import { UpdateGalleryItemDto } from './dto/update-gallery-item.dto';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    findAll(): Promise<import("./gallery-item.entity").GalleryItem[]>;
    create(dto: CreateGalleryItemDto): Promise<import("./gallery-item.entity").GalleryItem>;
    update(id: string, dto: UpdateGalleryItemDto): Promise<import("./gallery-item.entity").GalleryItem>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
