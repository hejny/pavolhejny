import { Talk } from '../model/Talk';

type CompareResult = 1 | -1 | 0;

export function compareTalksbyDate(talk1: Talk, talk2: Talk | null = null): CompareResult {
    return compareDates(talk1.date, talk2 ? talk2.date : undefined);
}

export function compareDates(date1: Date, date2 = new Date()): CompareResult {
    try {
        const delta = ((new Date(date2) as any) as number) - ((new Date(date1) as any) as number);

        if (delta > 0) {
            return 1;
        } else if (delta < 0) {
            return -1;
        } else {
            return 0;
        }
    } catch (error) {
        console.warn(error);
        return -1;
    }
}
