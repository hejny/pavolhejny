//import fetch from 'unfetch';
import { IConfigSource } from 'configchecker';
import { decapitalize, emptyKeysAsUndefined, isNotEmpty } from 'configchecker/lib/utils/object';
import fetch from 'isomorphic-unfetch';
import papaparse from 'papaparse';
import { TALKS_CSV_URL } from '../config';
import { Talk } from '../model/Talk';

export async function fetchTalks(): Promise<Talk[]> {
    const response = await fetch(TALKS_CSV_URL, {cache: "reload"});
    const dataString = await response.text();
    const { data } = papaparse.parse(dataString, {
        header: true,
    });

    return (data as IConfigSource[])
        .map((object) => emptyKeysAsUndefined<string|undefined>(object, (value) => value?!!value.trim():false))
        .filter(isNotEmpty)
        .map(decapitalize)
        .map((t) => new Talk(t));
}
