import { type Sharp } from "sharp";
import { type IntRGBA } from "./hexadecimal.js";

class ImageUtils {
    /**
     * Returns an object containing the RGBA data of the pixel at the provided coordinates where each channel is formatted as a hexadecimal colour code.
     */
    static async getPixelHexRGBA(
        image: Sharp,
        x: number,
        y: number,
    ): Promise<IntRGBA> {
        const { width, channels } = await image.metadata();

        const { data: imageBuffer } = await image
            .raw()
            .toBuffer({ resolveWithObject: true });

        const pixelDataOffset = (y * width + x) * channels;

        const red = imageBuffer[pixelDataOffset];
        const green = imageBuffer[pixelDataOffset + 1];
        const blue = imageBuffer[pixelDataOffset + 2];
        const alpha = channels === 4 ? imageBuffer[pixelDataOffset + 3] : 255;

        return {
            r: red,
            g: green,
            b: blue,
            a: alpha,
        };
    }
}
