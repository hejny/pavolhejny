import * as React from 'react';
import { Talk } from '../model/Talk';
import moment from 'moment';

type ITalksComponentProps = {
    talks: Talk[];
};

export function TalksComponent(props: ITalksComponentProps) {
    const { talks } = props;
    return (
        <table className="talks">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Event</th>
                    <th>City</th>
                    <th>Language</th>
                    <th>Links</th>
                </tr>
            </thead>
            <tbody>
                {talks.map((talk, i) => (
                    <tr key={i}>
                        <td>{talk.name}</td>
                        <td>{moment(talk.date).format(`MMMM YYYY`)}</td>
                        <td>{talk.eventURL ? <a href={talk.eventURL.toString()}>{talk.event}</a> : talk.event}</td>
                        <td>{talk.city}</td>
                        <td>{({ cs: 'Czech', sk: 'Slovak', en: 'english' } as any)[talk.language]}</td>
                        <td>
                            {talk.presentationURL && <a href={talk.presentationURL.toString()}>Presentation</a>}
                            {talk.videoURL && <a href={talk.videoURL.toString()}>Video</a>}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
