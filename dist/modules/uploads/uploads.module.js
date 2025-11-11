"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const crypto_1 = require("crypto");
const uploads_controller_1 = require("./uploads.controller");
function ensureUploadDirectory() {
    const uploadDir = (0, path_1.join)(process.cwd(), 'uploads');
    if (!(0, fs_1.existsSync)(uploadDir)) {
        (0, fs_1.mkdirSync)(uploadDir, { recursive: true });
    }
    return uploadDir;
}
let UploadsModule = class UploadsModule {
};
exports.UploadsModule = UploadsModule;
exports.UploadsModule = UploadsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: (_req, _file, cb) => {
                        const uploadDir = ensureUploadDirectory();
                        cb(null, uploadDir);
                    },
                    filename: (_req, file, cb) => {
                        const uniqueSuffix = `${Date.now()}-${(0, crypto_1.randomUUID)()}`;
                        const fileExt = (0, path_1.extname)(file.originalname) || '';
                        cb(null, `${uniqueSuffix}${fileExt.toLowerCase()}`);
                    },
                }),
                fileFilter: (_req, file, cb) => {
                    if (!file.mimetype.startsWith('image/')) {
                        cb(new Error('Only image uploads are allowed'));
                        return;
                    }
                    cb(null, true);
                },
                limits: {
                    fileSize: 10 * 1024 * 1024,
                },
            }),
        ],
        controllers: [uploads_controller_1.UploadsController],
    })
], UploadsModule);
//# sourceMappingURL=uploads.module.js.map