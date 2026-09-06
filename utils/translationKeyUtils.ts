/**
 * Some of these utils are dependent on string utilities.
 */
import { stringUtils } from "./stringUtils.js";

/**
 * A group of utilities for dynamically generating translation keys for external tooling.
 */
export class translationKeyUtils {
    /**
     * Returns a modified version of an existing translation key.
     *
     * Replaces the search value with a new value and appends a suffix.
     */
    static replaceKey(
        key: string,
        searchKey: string,
        returnKey: string,
        suffix: string,
    ): string {
        return (
            key.replace(searchKey, returnKey) +
            ` ${stringUtils.toTitleCase(suffix)}`
        );
    }

    /**
     * Generates a new translation key using the block identifier and a translation key.
     *
     * The output will be formatted such as 'tile.example_block_id.name=Example Block Id'
     */
    static generateKey(blockId: string, translationKey: string): string {
        const displayName = stringUtils.toTitleCase(blockId);
        return translationKey + "=" + displayName;
    }
}
