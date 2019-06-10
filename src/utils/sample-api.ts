//import fetch from 'unfetch';
import fetch from 'isomorphic-unfetch';
import papaparse from 'papaparse';
import { Talk } from '../model/Talk';

/** Dummy user data. */
export const dataArray: Talk[] = [new Talk({ id: 1 }), new Talk({ id: 1 })];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id: number | string) {
    const selected = dataArray.find((data) => data.id === Number(id));

    if (!selected) {
        throw new Error('Cannot find user');
    }

    const response = await fetch(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vRILhqlYdHZYOHa8_5awq6Z5bo4Sfhr2eFMjeQ7qwqDLbfR4gt44PqjfHKApmjgNbPjbc8FlStKhKiP/pub?gid=0&single=true&output=csv`,
    );
    const dataString = await response.text();
    const { data } = papaparse.parse(dataString, {
        header: true,
    });

    selected.description = JSON.stringify(data);

    return selected;
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
    // Throw an error, just for example.
    if (!Array.isArray(dataArray)) {
        throw new Error('Cannot find users');
    }

    return dataArray;
}
