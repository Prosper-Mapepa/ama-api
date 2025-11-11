import { PageSectionsService } from './page-sections.service';
import { CreatePageSectionDto } from './dto/create-page-section.dto';
import { UpdatePageSectionDto } from './dto/update-page-section.dto';
export declare class PageSectionsController {
    private readonly pageSectionsService;
    constructor(pageSectionsService: PageSectionsService);
    findAll(page: string): Promise<import("./page-section.entity").PageSection[]>;
    create(dto: CreatePageSectionDto): Promise<import("./page-section.entity").PageSection>;
    update(id: string, dto: UpdatePageSectionDto): Promise<import("./page-section.entity").PageSection>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
