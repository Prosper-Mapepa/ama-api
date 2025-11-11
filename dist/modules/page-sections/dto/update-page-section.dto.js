"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePageSectionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_page_section_dto_1 = require("./create-page-section.dto");
class UpdatePageSectionDto extends (0, mapped_types_1.PartialType)(create_page_section_dto_1.CreatePageSectionDto) {
}
exports.UpdatePageSectionDto = UpdatePageSectionDto;
//# sourceMappingURL=update-page-section.dto.js.map