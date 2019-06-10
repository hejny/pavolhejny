//import fetch from 'unfetch';
import fetch from 'isomorphic-unfetch';
import papaparse from 'papaparse';
import { Talk } from '../model/Talk';
import { TALKS_CSV_URL } from '../config';
import { decapitalize } from './object';

export async function fetchTalks(): Promise<Talk[]> {
    const response = await fetch(TALKS_CSV_URL);
    const dataString = await response.text();
    const { data } = papaparse.parse(dataString, {
        header: true,
    });

    return data.map((t) => new Talk(decapitalize(t)));
}
