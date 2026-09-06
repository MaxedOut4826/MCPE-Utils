/**
 * Some of these utils are dependent on node:fs & node:path
 */
import {
    readFileSync,
    writeFileSync,
    readdirSync,
    existsSync,
    mkdirSync,
    type PathOrFileDescriptor,
    type WriteFileOptions,
} from "node:fs";
import { join } from "node:path";

/**
 * A group of utilities to be used for external tooling.
 */
export class FileUtils {
    /**
     * Reads and returns the contents of the file at the path formatted as JSON if possible.
     */
    static parseJsonFileSync(path: string): Record<string, any> {
        return JSON.parse(readFileSync(path, "utf8"));
    }

    /**
     * Reads and returns the contents of the file at the path divided into lines.
     */
    static parseFileLinesSync(path: string): string[] {
        return readFileSync(path, "utf8").split(/\r?\n/);
    }

    /**
     * Reads and returns the contents of all files in the directory divided into lines.
     *
     * Formatted as { fileName: contents }.
     */
    static parseLangDirectorySync(directory: string): Record<string, string[]> {
        const texts: Record<string, string[]> = {};
        for (const file of readdirSync(directory)) {
            const textPath = join(directory, file);
            const fileContents = FileUtils.parseFileLinesSync(textPath);
            texts[file] = fileContents;
        }
        return texts;
    }

    /**
     * Writes unstructured JSON data to the file at the output location structured as formatted JSON if possible.
     */
    static writeJsonFileSync(
        file: PathOrFileDescriptor,
        data: unknown,
        options: WriteFileOptions = { encoding: "utf8" },
    ) {
        FileUtils.ensureDirSync(String(file));

        writeFileSync(file, JSON.stringify(data, null, 4), options);
    }

    /**
     * Writes multi-line data to the file at the output location separated by new lines.
     */
    static writeFileLinesSync(
        file: PathOrFileDescriptor,
        keys: string[],
        options: WriteFileOptions = { encoding: "utf8" },
    ) {
        FileUtils.ensureDirSync(String(file));

        writeFileSync(file, keys.join("\n"), options);
    }

    /**
     * Ensures a directory exists by creating all folders to the path if the directory doesn't already exist.
     */
    static ensureDirSync(directory: string) {
        if (existsSync(directory)) {
            return;
        }

        const normalizedDirectory = directory.replace(/\\/g, "/");
        if (normalizedDirectory.includes(".")) {
            const fileStart = normalizedDirectory.lastIndexOf("/");
            if (fileStart >= 0) {
                directory = normalizedDirectory.slice(0, fileStart);
            }
        }

        mkdirSync(directory, { recursive: true });
    }
}
