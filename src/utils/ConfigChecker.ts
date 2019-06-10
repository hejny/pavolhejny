import { isUndefined } from 'util';

export interface IConfigSource {
    [key: string]: string | undefined;
}
export class ConfigChecker {

    static from(source: IConfigSource):ConfigChecker{
        const config = new ConfigChecker();
        config.load(source);
        return config;
    }

    source: IConfigSource = {};

    load(source: IConfigSource) {
        this.source = {
            ...this.source,
            ...source,
        };
    }

    get(key: string, description?: string): ConfigValueString {
        return new ConfigValueString(this.source[key], {key, description, configChecker: this});
    }

    //TODO: Check multiple usages of config values
    //TODO: custom metods to parse values
}

interface IConfigValueProfile {
    key: string;
    configChecker: ConfigChecker;
    description?: string;
}

//TODO: nice generic types
export class ConfigValue<T> {

    constructor(public value: T, protected profile: IConfigValueProfile, private canBeUndefined = true) {}

    get about() {
        return(
        `
**Key:** "${this.profile.key}"
**Description:** "${this.profile.description}"
**Config:**
\`\`\`json
${JSON.stringify(this.profile.configChecker.source,null, 4)}
\`\`\`
        `.trim()
        );
    }

    private checkThatValueCanBeUndefinedToPreventMultipleUsageOfRequiredOrDefault(){
        if(!this.canBeUndefined){
            //TODO: Better option would be to check it in typescript not the runtime
            throw Error(`Required and default can be used only once ${this.about}`);
        }
    }

    required(): ConfigValue<NonNullable<T>> {
        this.checkThatValueCanBeUndefinedToPreventMultipleUsageOfRequiredOrDefault();
        if (isUndefined(this.value)) {
            throw Error(`In config should be defined ${this.profile.key}. \n ${this.about}`);
        }
        return new ConfigValue(this.value!, this.profile, false);
    }

    default(value: NonNullable<T>): ConfigValue<T> {
        this.checkThatValueCanBeUndefinedToPreventMultipleUsageOfRequiredOrDefault();
        return new ConfigValue(this.value || value, this.profile, false);
    }

    custom<TC>(conversionType: string, convert: (value: NonNullable<T>) => TC): ConfigValue<TC|undefined>{
        if (isUndefined(this.value)) {
            return new ConfigValue(undefined, this.profile);
        }

        try{
            return new ConfigValue<TC>(convert(this.value!/*TODO: why !*/),this.profile);
        }catch(error){
            throw new Error(
                `In config thare is a problem with converting "${this.value}" to ${conversionType}. ${error.message} \n ${this.about}`,
            );
        }        
    }

    asType<T>(): ConfigValue<T>{
        return new ConfigValue(this.value as unknown as T, this.profile);
    }
}

export class ConfigValueString extends ConfigValue<string | undefined> {

    number(): ConfigValue<number | undefined> {

        return this.custom('number',(stringValue)=>{
            const numericValue = Number.parseFloat(stringValue);

            if (Number.isNaN(numericValue)) {
                throw new Error(`Value is not numeric.`);
            }

            return numericValue;

        });
    }

    boolean(): ConfigValue<boolean | undefined> {

        return this.custom('boolean',(stringValue)=>{
            stringValue = stringValue.toUpperCase();

            if (['TRUE', '1', 'YES'].includes(stringValue)) return true;
            if (['FALSE', '0', 'NO'].includes(stringValue)) return false;
    
            throw new Error(
                `Value is not boolean like.`,
            );

        });
    }

    json(): ConfigValue<any | undefined> {

        return this.custom('json',(stringValue)=>{
            try{
            return JSON.parse(stringValue);
            }catch(error){
                throw new Error(
                    `Value is not valid json.`,
                );
            }
        });
    }

    list(): ConfigValue<string[] | undefined> {
        return this.custom('list',(stringValue)=>{
            return stringValue.split(',').map((value) => value.trim());
        });
    }

    date(): ConfigValue<Date | undefined> {
        return this.custom('date',(stringValue)=>{
            const dateValue = new Date(stringValue);

            if (Number.isNaN(dateValue.getTime())){
                throw new Error(`Value is not date-like.`);
            }

            return dateValue;
        });
    }

    url(): ConfigValue<URL | undefined> {
        return this.custom('url',(stringValue)=>{
            try{
                    return new URL(stringValue);
            }catch(error){
                throw new Error(
                    `Value is not valid URL.`,
                );
            }
        });
    }


    //TODO: make regexp
}
