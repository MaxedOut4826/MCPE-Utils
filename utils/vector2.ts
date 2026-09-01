export type Vector2 = {
    x: number;
    y: number;
};

export class Vector2Utils {
    static add(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: x0 + x1,
            y: y0 + y1,
        };
    }

    static subtract(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: x0 - x1,
            y: y0 - y1,
        };
    }

    static multiply(vector: Vector2, scalar: number): Vector2 {
        const { x, y } = vector;

        return {
            x: x * scalar,
            y: y * scalar,
        };
    }

    static hadamardProduct(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: x0 * x1,
            y: y0 * y1,
        };
    }

    static normalise(vector: Vector2, scalar: number): Vector2 {
        const { x: x0, y: y0 } = vector;

        return {
            x: x0 / scalar,
            y: y0 / scalar,
        };
    }

    static areaOf(vector: Vector2): number {
        const { x, y } = vector;

        return x * y;
    }

    static distanceSqr(vector1: Vector2, vector2: Vector2): number {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;

        return dx * dx + dy * dy;
    }

    static distance(vector1: Vector2, vector2: Vector2): number {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        const dx = x0 - x1;
        const dy = y0 - y1;

        return Math.sqrt(dx * dx + dy * dy);
    }

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

    static getLowestVector(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: Math.min(x0, x1),
            y: Math.min(y0, y1),
        };
    }

    static getHighestVector(vector1: Vector2, vector2: Vector2): Vector2 {
        const { x: x0, y: y0 } = vector1;
        const { x: x1, y: y1 } = vector2;

        return {
            x: Math.max(x0, x1),
            y: Math.max(y0, y1),
        };
    }

    static toString(vector: Vector2): string {
        const { x, y } = vector;

        return `${x}, ${y}`;
    }

    static round(vector: Vector2, precision: number): Vector2 {
        const { x, y } = vector;

        return {
            x: parseFloat(x.toFixed(precision)),
            y: parseFloat(y.toFixed(precision)),
        };
    }
}
