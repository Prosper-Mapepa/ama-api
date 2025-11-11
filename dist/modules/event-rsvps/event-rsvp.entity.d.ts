import { BaseEntity } from '../../common/entities/base.entity';
import { Event } from '../events/event.entity';
export declare class EventRsvp extends BaseEntity {
    eventId: string;
    event: Event;
    name: string;
    email: string;
    phone?: string;
    guestCount: number;
    notes?: string | null;
}
