import { ConfigChecker, IConfigSource } from 'configchecker';
export class Talk {
    //TODO: readonly id: number;
    name: string;
    description?: string;
    published: boolean;
    date?: Date;
    event?: string;
    city?: string;
    duration?: string;
    presentationURL?: URL;
    thumbnail?: URL;
    presentationStaticURL?: URL;
    eventURL?: URL;
    eventFB?: URL;
    videoURL?: URL;
    audioURL?: URL;
    articleURL?: URL;

    constructor(data: IConfigSource) {
        console.log(data);
        const c = ConfigChecker.from(data);

        this.name = c.get('name').required().value;
        this.description = c.get('description').value;
        this.published = c
            .get('published')
            .boolean()
            .required().value;
        this.date = c
            .get('date')
            .date()
            //.required()
            .value;
        this.event = c.get('event').value;
        this.city = c.get('city').value;
        this.duration = c.get('duration').value;
        this.presentationURL = c.get('presentationURL').url().value;
        this.thumbnail = c.get('thumbnail').url().value;
        this.presentationStaticURL = c.get('presentationStaticURL').url().value;
        this.eventURL = c.get('presentationStaticURL').url().value;
        this.eventFB = c.get('eventFB').url().value;
        this.videoURL = c.get('videoURL').url().value;
        this.audioURL = c.get('audioURL').url().value;
        this.articleURL = c.get('articleURL').url().value;
    }
}
