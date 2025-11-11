import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthPayload } from '../auth.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptions] | [opt: import("passport-jwt").StrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: AuthPayload): Promise<{
        userId: string;
        email: string;
    }>;
}
export {};
