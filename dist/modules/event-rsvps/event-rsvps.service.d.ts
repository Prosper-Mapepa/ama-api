import { Repository } from 'typeorm';
import { EventRsvp } from './event-rsvp.entity';
import { CreateEventRsvpDto } from './dto/create-event-rsvp.dto';
export declare class EventRsvpsService {
    private readonly rsvpRepo;
    constructor(rsvpRepo: Repository<EventRsvp>);
    findByEvent(eventId: string): Promise<EventRsvp[]>;
    countForEvent(eventId: string): Promise<number>;
    create(eventId: string, dto: CreateEventRsvpDto): Promise<EventRsvp>;
}
