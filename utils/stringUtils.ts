/**
 * A group of miscellaneous utilities for strings.
 */
export class stringUtils {
    /**
     * Returns a boolean indicating if the provided character of a string is a lower-case letter.
     */
    static charIsLowerAlpha(char: string): boolean {
        return /^[a-z]$/.test(char);
    }

    /**
     * Returns a boolean indicating if the provided character of a string is an upper-case letter.
     */
    static charIsUpperAlpha(char: string): boolean {
        return /^[A-Z]$/.test(char);
    }

    /**
     * Returns a boolean indicating if the provided character of a string is a letter.
     */
    static charIsAlpha(char: string): boolean {
        return /^[a-zA-Z]$/.test(char);
    }

    /**
     * Returns a boolean indicating if the provided character of a string is a number.
     */
    static charIsNumeric(char: string): boolean {
        return /^[0-9]$/.test(char);
    }

    /**
     * Returns a boolean indicating if the provided character of a string is a valid hexadecimal character; a lower-case letter between a-f.
     */
    static charIsHexDigit(char: string): boolean {
        return /^[a-f]$/.test(char);
    }

    /**
     * Returns a boolean indicating if the provided string includes any keyword from a list of keywords.
     */
    static isAnySubstringInString(string: string, keywords: string[]): boolean {
        for (const keyword of keywords) {
            if (string.includes(keyword)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a boolean indicating if any perfectly matching string is found in a list of comparison strings.
     */
    static isAnyStringMatching(string: string, comparisons: string[]): boolean {
        for (const string2 of comparisons) {
            if (string2 === string) {
                return true;
            }
        }
        return false;
    }

    /**
     * Returns the first instance of a string in a list that includes the provided substring.
     */
    static findSubstringInList(searchKey: string, list: string[]) {
        for (const line of list) {
            if (line.includes(searchKey)) {
                return line;
            }
        }
    }

    /**
     * Returns the value of the first key found where the search key includes the key.
     */
    static findSubstringInObjectKeys(
        searchKey: string,
        object: Record<string, any>,
    ): any {
        for (const [key, value] of Object.entries(object)) {
            if (searchKey.includes(key)) {
                return value;
            }
        }
    }

    /**
     * Returns a transformed string in title case format.
     *
     * Replaces underscores with spaces and capitalises the first letter of each word.
     */
    static toTitleCase(string: string): string {
        return string
            .replaceAll("_", " ")
            .replaceAll(/\b\w/g, (char) => char.toUpperCase());
    }
}
