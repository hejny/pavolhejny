//import fetch from 'unfetch';
import { IConfigSource } from 'configchecker';
import { decapitalize, emptyKeysAsUndefined, isNotEmpty } from 'configchecker/lib/utils/object';
import fetch from 'isomorphic-unfetch';
import papaparse from 'papaparse';
import { TALKS_CSV_URL } from '../config';
import { Talk } from '../model/Talk';

export async function fetchTalks(): Promise<Talk[]> {
    const response = await fetch(TALKS_CSV_URL);
    const dataString = await response.text();
    const { data } = papaparse.parse(dataString, {
        header: true,
    });

    return (data as IConfigSource[]).map(emptyKeysAsUndefined).filter(isNotEmpty).map(decapitalize).map((t) => new Talk(t));




}
