/**
 * A group of utilities used for numbers & mathematic formulae.
 */
export class MathUtils {
    /**
     * Returns the provided number clamped between the minimum & maximum values.
     */
    static clamp(number: number, min: number, max: number): number {
        return Math.min(Math.max(number, min), max);
    }
}
