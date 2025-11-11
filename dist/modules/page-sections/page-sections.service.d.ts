import { Repository } from 'typeorm';
import { PageSection } from './page-section.entity';
import { CreatePageSectionDto } from './dto/create-page-section.dto';
import { UpdatePageSectionDto } from './dto/update-page-section.dto';
export declare class PageSectionsService {
    private readonly sectionsRepo;
    constructor(sectionsRepo: Repository<PageSection>);
    findAllByPage(page: PageSection['page']): Promise<PageSection[]>;
    findOne(id: string): Promise<PageSection>;
    create(dto: CreatePageSectionDto): Promise<PageSection>;
    update(id: string, dto: UpdatePageSectionDto): Promise<PageSection>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
