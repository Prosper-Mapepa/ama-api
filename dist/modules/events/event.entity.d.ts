import { BaseEntity } from '../../common/entities/base.entity';
import { EventRsvp } from '../event-rsvps/event-rsvp.entity';
export declare class Event extends BaseEntity {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category: string;
    spots: number;
    imageUrl?: string | null;
    rsvps?: EventRsvp[];
}
