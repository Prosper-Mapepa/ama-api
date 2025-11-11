import type { Request } from 'express';
export declare class UploadsController {
    uploadFile(file: unknown, req: Request): {
        path: string;
        url: string;
        originalName: string;
        size: number;
        mimetype: string;
    };
}
