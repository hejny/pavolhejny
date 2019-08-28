import { ConfigChecker, IConfigSource } from 'configchecker';
export class Talk {
    //TODO: readonly id: number;
    name: string;
    description?: string;
    published: boolean;
    language: string;
    date: Date;
    event?: string;
    city?: string;
    duration?: string;
    presentationURL?: URL;
    eventURL?: URL;
    videoURL?: URL;

    constructor(data: IConfigSource) {
        //console.log(data);
        const c = ConfigChecker.from(data);

        this.name = c.get('name').required().value;
        this.description = c.get('description').value;
        this.published = c
            .get('published')
            .boolean()
            .required().value;
        this.language = c.get('language').required().value;
        this.date =
            //.required()
            //.required() /*TODO: To configchecker default should mean also required*/
            c
                .get('date')
                .date()
                .default(new Date()).value!;
        this.event = c.get('event').value;
        this.city = c.get('city').value;
        this.duration = c.get('duration').value;
        this.presentationURL = c.get('presentationURL').url().value;
        this.eventURL = c.get('eventURL').url().value;
        this.videoURL = c.get('videoURL').url().value;
    }
}
