/**
 * This is for external use rather than use within the MCPE Script API.
 *
 * In Script API, you should use the Vector3 type provided by "@minecraft/server".
 */
export type Vector3 = {
    x: number;
    y: number;
    z: number;
};

/**
 * Used to perform calculations & operations on 3 dimensional points.
 */
export class Vector3Utils {
    /**
     * Returns the sum of the two vectors.
     */
    static add(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: x0 + x1,
            y: y0 + y1,
            z: z0 + z1,
        };
    }

    /**
     * Returns the difference between the two vectors.
     */
    static subtract(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: x0 - x1,
            y: y0 - y1,
            z: z0 - z1,
        };
    }

    /**
     * Returns a vector where each axis has been multipled by the scalar.
     */
    static multiply(vector: Vector3, scalar: number): Vector3 {
        const { x, y, z } = vector;

        return {
            x: x * scalar,
            y: y * scalar,
            z: z * scalar,
        };
    }

    /**
     * Returns a vector where each axis of vector1 has been multiplied by its vector2 counterpart.
     */
    static hadamardProduct(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: x0 * x1,
            y: y0 * y1,
            z: z0 * z1,
        };
    }

    /**
     * Returns a vector where each axis has been divided by the scalar.
     */
    static divide(vector: Vector3, scalar: number): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector;

        return {
            x: x0 / scalar,
            y: y0 / scalar,
            z: z0 / scalar,
        };
    }

    /**
     * Returns the total volume of a vector calculated as x * y * z.
     */
    static volumeOf(vector: Vector3): number {
        const { x, y, z } = vector;

        return x * y * z;
    }

    /**
     * Returns the distance squared between two vectors.
     *
     * This can be used in substitute to the 'distance' method for performance, as it avoids the square-root call.
     */
    static distanceBetweenSqr(vector1: Vector3, vector2: Vector3): number {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;
        const dz = z0 - z1;

        return dx * dx + dy * dy + dz * dz;
    }

    /**
     * Returns the distance between two vectors.
     */
    static distanceBetween(vector1: Vector3, vector2: Vector3): number {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;
        const dz = z0 - z1;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    /**
     * Returns the point between two vectors at the iteration parameter 't'.
     */
    static lerp(vector1: Vector3, vector2: Vector3, t: number): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        const dx = x1 - x0;
        const dy = y1 - y0;
        const dz = z1 - z0;

        return {
            x: dx * t + x0,
            y: dy * t + y0,
            z: dz * t + z0,
        };
    }

    /**
     * Returns the lowest of two vectors.
     */
    static getLowestVector(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: Math.min(x0, x1),
            y: Math.min(y0, y1),
            z: Math.min(z0, z1),
        };
    }

    /**
     * Returns the highest of two vectors.
     */
    static getHighestVector(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: Math.max(x0, x1),
            y: Math.max(y0, y1),
            z: Math.max(z0, z1),
        };
    }

    /**
     * Returns the vector converted to a string.
     *
     * Example: '1, 2, 3'.
     */
    static toString(vector: Vector3): string {
        const { x, y, z } = vector;

        return `${x}, ${y}, ${z}`;
    }

    /**
     * Returns the vector truncated to the nearest value at the provided point of precision.
     */
    static toFixed(vector: Vector3, precision: number): Vector3 {
        const { x, y, z } = vector;

        return {
            x: parseFloat(x.toFixed(precision)),
            y: parseFloat(y.toFixed(precision)),
            z: parseFloat(z.toFixed(precision)),
        };
    }

    /**
     * Returns the vector where all axes have their fractional points removed, converting them to integers.
     */
    static truncate(vector: Vector3): Vector3 {
        const { x, y, z } = vector;

        return {
            x: Math.trunc(x),
            y: Math.trunc(y),
            z: Math.trunc(z),
        };
    }

    /**
     * Returns the vector where all axes values have been rounded to the nearest integer.
     */
    static round(vector: Vector3): Vector3 {
        const { x, y, z } = vector;
        return {
            x: Math.round(x),
            y: Math.round(y),
            z: Math.round(z),
        };
    }

    /**
     * Returns the vector where all axes values have been rounded down to the nearest integer.
     */
    static floor(vector: Vector3): Vector3 {
        const { x, y, z } = vector;
        return {
            x: Math.floor(x),
            y: Math.floor(y),
            z: Math.floor(z),
        };
    }

    /**
     * Returns the vector where all axes values have been rounded up to the nearest integer.
     */
    static ceil(vector: Vector3): Vector3 {
        const { x, y, z } = vector;
        return {
            x: Math.ceil(x),
            y: Math.ceil(y),
            z: Math.ceil(z),
        };
    }

    /**
     * Returns the cross product of the two vectors; a new vector pointing completely out of the shared plane of two vectors.
     */
    static crossProduct(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: y0 * z1 - z0 * y1,
            y: z0 * x1 - x0 * z1,
            z: x0 * y1 - y0 * x1,
        };
    }

    /**
     * Returns the dot product of the two vectors; a scalar indicating how much two vectors face in the same direction.
     */
    static dotProduct(vector1: Vector3, vector2: Vector3): number {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return x0 * x1 + y0 * y1 + z0 * z1;
    }

    /**
     * Returns the vector normalised to be have a length of exactly one while preserving direction.
     */
    static normalise(vector: Vector3): Vector3 {
        const { x: x, y: y, z: z } = vector;
        const magnitude = Math.sqrt(x * x + y * y + z * z);

        return {
            x: x / magnitude,
            y: y / magnitude,
            z: z / magnitude,
        };
    }

    /**
     * Returns the point between p0 & p2 using p1 as the control for the arch of the bezier curve.
     */
    static bezier(p0: Vector3, p1: Vector3, p2: Vector3, t: number): Vector3 {
        const { x: x0, y: y0, z: z0 } = p0;
        const { x: x1, y: y1, z: z1 } = p1;
        const { x: x2, y: y2, z: z2 } = p2;

        const intermediateX0 = (x1 - x0) * t + x0;
        const intermediateY0 = (y1 - y0) * t + y0;
        const intermediateZ0 = (z1 - z0) * t + z0;

        const intermediateX1 = (x2 - x1) * t + x1;
        const intermediateY1 = (y2 - y1) * t + y1;
        const intermediateZ1 = (z2 - z1) * t + z1;

        return {
            x: (intermediateX1 - intermediateX0) * t + intermediateX0,
            y: (intermediateY1 - intermediateY0) * t + intermediateY0,
            z: (intermediateZ1 - intermediateZ0) * t + intermediateZ0,
        };
    }

    /**
     * Returns a new vector in front of the position based on the rotation & distance.
     */
    static getPositionInFront(
        position: Vector3,
        rotation: Vector3,
        distance: number,
    ): Vector3 {
        const { x: rotX, y: rotY, z: rotZ } = rotation;
        const { x: posX, y: posY, z: posZ } = position;

        const viewDirectionX = rotX * distance;
        const viewDirectionY = rotY * distance;
        const viewDirectionZ = rotZ * distance;

        return {
            x: posX * viewDirectionX,
            y: posY * viewDirectionY,
            z: posZ * viewDirectionZ,
        };
    }
}
