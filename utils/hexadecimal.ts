export interface HexRGBA {
    r: string | undefined;
    g: string | undefined;
    b: string | undefined;
    a: string | undefined;
}

export interface IntRGBA {
    r: number | undefined;
    g: number | undefined;
    b: number | undefined;
    a: number | undefined;
}

export interface HexRGB {
    r: string | undefined;
    g: string | undefined;
    b: string | undefined;
}

export interface IntRGB {
    r: number | undefined;
    g: number | undefined;
    b: number | undefined;
}

const HEX_CHAR_OFFSET = 87;

export class Hexadecimal {
    /**
     * Returns a boolean indicating if the provided character is a valid hexadecimal digit; a letter between a-f.
     */
    static charIsHexDigit(char: string): boolean {
        return /^[a-f]$/.test(char);
    }

    /**
     * Returns the hexadecimal single digit parsed as an integer.
     */
    static convertHexDigitToInt(hexDigit: string): number {
        return Hexadecimal.charIsHexDigit(hexDigit)
            ? hexDigit.charCodeAt(0) - HEX_CHAR_OFFSET
            : Number(hexDigit);
    }

    /**
     * Returns the hexadecimal string parsed as an integer.
     */
    static convertHexToInt(hex: string): number | undefined {
        if (!hex[0] || !hex[1]) {
            return;
        }

        const digit0 = Hexadecimal.convertHexDigitToInt(hex[0]) << 4;
        const digit1 = Hexadecimal.convertHexDigitToInt(hex[1]);
        return digit0 | digit1;
    }

    /**
     * Returns the hexadecimal formatted RGBA data to integer parsed RGBA data.
     */
    static convertHexToIntRGBA(rgba: HexRGBA): IntRGBA | undefined {
        if (!rgba.r || !rgba.g || !rgba.b || !rgba.a) {
            return;
        }

        return {
            r: Hexadecimal.convertHexToInt(rgba.r),
            g: Hexadecimal.convertHexToInt(rgba.g),
            b: Hexadecimal.convertHexToInt(rgba.b),
            a: Hexadecimal.convertHexToInt(rgba.a),
        };
    }
}
