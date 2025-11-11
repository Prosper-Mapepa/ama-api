import { EventRsvpsService } from './event-rsvps.service';
import { CreateEventRsvpDto } from './dto/create-event-rsvp.dto';
export declare class EventRsvpsController {
    private readonly eventRsvpsService;
    constructor(eventRsvpsService: EventRsvpsService);
    findAll(eventId: string): Promise<import("./event-rsvp.entity").EventRsvp[]>;
    create(eventId: string, dto: CreateEventRsvpDto): Promise<import("./event-rsvp.entity").EventRsvp>;
}
