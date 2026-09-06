/**
 * This is for external use rather than use within the MCPE Script API.
 *
 * In Script API, you should use the Vector2 type provided by "@minecraft/server".
 */
export type Vector2 = {
    x: number;
    y: number;
};

/**
 * Used to perform calculations & operations on 2 dimensional points.
 */
export class Vector2Utils {
    /**
     * Returns the sum of the two vectors.
     */
    static add(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: x0 + x1,
            y: y0 + y1,
        };
    }

    /**
     * Returns the difference between the two vectors.
     */
    static subtract(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: x0 - x1,
            y: y0 - y1,
        };
    }

    /**
     * Returns a vector where each axis has been multipled by the scalar.
     */
    static multiply(vector: Vector2, scalar: number): Vector2 {
        const { x, y } = vector;

        return {
            x: x * scalar,
            y: y * scalar,
        };
    }

    /**
     * Returns a vector where each axis of vector1 has been multiplied by its vector2 counterpart.
     */
    static hadamardProduct(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: x0 * x1,
            y: y0 * y1,
        };
    }

    /**
     * Returns a vector where each axis has been divided by the scalar.
     */
    static normalise(vector: Vector2, scalar: number): Vector2 {
        const { x: x0, y: y0 } = vector;

        return {
            x: x0 / scalar,
            y: y0 / scalar,
        };
    }

    /**
     * Returns the total area of a vector calculated as x * y.
     */
    static areaOf(vector: Vector2): number {
        const { x, y } = vector;

        return x * y;
    }

    /**
     * Returns the distance squared between two vectors.
     *
     * This can be used in substitute to the 'distance' method for performance, as it avoids the square-root call.
     */
    static distanceSqr(vector1: Vector2, vector2: Vector2): number {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;

        return dx * dx + dy * dy;
    }

    /**
     * Returns the distance between two vectors.
     */
    static distance(vector1: Vector2, vector2: Vector2): number {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;

        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Returns the point between two vectors at the iteration parameter 't'.
     */
    static lerp(vector1: Vector2, vector2: Vector2, t: number): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        const dx = x1 - x0;
        const dy = y1 - y0;

        return {
            x: dx * t + x0,
            y: dy * t + y0,
        };
    }

    /**
     * Returns the lowest of two vectors.
     */
    static getLowestVector(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: Math.min(x0, x1),
            y: Math.min(y0, y1),
        };
    }

    /**
     * Returns the highest of two vectors.
     */
    static getHighestVector(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: Math.max(x0, x1),
            y: Math.max(y0, y1),
        };
    }

    /**
     * Returns the vector converted to a string.
     *
     * Example: '1, 2'.
     */
    static toString(vector: Vector2): string {
        const { x, y } = vector;

        return `${x}, ${y}`;
    }

    /**
     * Returns the vector rounded to the nearest value at the provided point of precision.
     */
    static round(vector: Vector2, precision: number): Vector2 {
        const { x, y } = vector;

        return {
            x: parseFloat(x.toFixed(precision)),
            y: parseFloat(y.toFixed(precision)),
        };
    }
}
