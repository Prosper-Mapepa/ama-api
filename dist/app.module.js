"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const page_sections_module_1 = require("./modules/page-sections/page-sections.module");
const events_module_1 = require("./modules/events/events.module");
const team_module_1 = require("./modules/team/team.module");
const gallery_module_1 = require("./modules/gallery/gallery.module");
const settings_module_1 = require("./modules/settings/settings.module");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const uploads_module_1 = require("./modules/uploads/uploads.module");
const memberships_module_1 = require("./modules/memberships/memberships.module");
const event_rsvps_module_1 = require("./modules/event-rsvps/event-rsvps.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', '.env.local'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (config) => ({
                    type: 'postgres',
                    url: config.get('DATABASE_URL'),
                    autoLoadEntities: true,
                    synchronize: config.get('NODE_ENV') !== 'production',
                }),
                inject: [config_1.ConfigService],
            }),
            page_sections_module_1.PageSectionsModule,
            events_module_1.EventsModule,
            team_module_1.TeamModule,
            gallery_module_1.GalleryModule,
            settings_module_1.SettingsModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            uploads_module_1.UploadsModule,
            memberships_module_1.MembershipsModule,
            event_rsvps_module_1.EventRsvpsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map