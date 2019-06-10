export function decapitalize<T>(mixedObject: { [key: string]: T }): { [key: string]: T } {
    const decapitalizedObject: { [key: string]: T } = {};

    for (const mixedKey of Object.keys(mixedObject)) {
        const decapitalizedKey = mixedKey.substr(0, 1) + mixedKey.substr(1);
        decapitalizedObject[decapitalizedKey] = mixedObject[mixedKey];
    }

    return decapitalizedObject;
}
