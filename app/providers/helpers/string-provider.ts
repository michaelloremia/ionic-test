import {Injectable} from 'angular2/core'

@Injectable()
/**
 * string helper function trimmed for the app use
 */
export class StringProvider {
    constructor () {}
    
    /**
     * Returns trim paragraphs to for preview display
     */
    trimParagraphs (str : string, charCount : number) {
        str = str.substr(0, charCount);
        return str.substr(0, Math.min(str.length, str.lastIndexOf(" ")));
    }
}