export type Vector3 = {
    x: number;
    y: number;
    z: number;
};

export class Vector3Utils {
    static add(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: x0 + x1,
            y: y0 + y1,
            z: z0 + z1,
        };
    }

    static subtract(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: x0 - x1,
            y: y0 - y1,
            z: z0 - z1,
        };
    }

    static multiply(vector: Vector3, scalar: number): Vector3 {
        const { x, y, z } = vector;

        return {
            x: x * scalar,
            y: y * scalar,
            z: z * scalar,
        };
    }

    static hadamardProduct(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: x0 * x1,
            y: y0 * y1,
            z: z0 * z1,
        };
    }

    static normalise(vector: Vector3, scalar: number): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector;

        return {
            x: x0 / scalar,
            y: y0 / scalar,
            z: z0 / scalar,
        };
    }

    static volumeOf(vector: Vector3): number {
        const { x, y, z } = vector;

        return x * y * z;
    }

    static distanceSqr(vector1: Vector3, vector2: Vector3): number {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;
        const dz = z0 - z1;

        return dx * dx + dy * dy + dz * dz;
    }

    static distance(vector1: Vector3, vector2: Vector3): number {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;
        const dz = z0 - z1;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

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

    static getLowestVector(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: Math.min(x0, x1),
            y: Math.min(y0, y1),
            z: Math.min(z0, z1),
        };
    }

    static getHighestVector(vector1: Vector3, vector2: Vector3): Vector3 {
        const { x: x0, y: y0, z: z0 } = vector1;
        const { x: x1, y: y1, z: z1 } = vector2;

        return {
            x: Math.max(x0, x1),
            y: Math.max(y0, y1),
            z: Math.max(z0, z1),
        };
    }

    static toString(vector: Vector3): string {
        const { x, y, z } = vector;

        return `${x}, ${y}, ${z}`;
    }

    static round(vector: Vector3, precision: number): Vector3 {
        const { x, y, z } = vector;

        return {
            x: parseFloat(x.toFixed(precision)),
            y: parseFloat(y.toFixed(precision)),
            z: parseFloat(z.toFixed(precision)),
        };
    }
}
