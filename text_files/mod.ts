import { join } from "https://deno.land/std/path/mod.ts";

async function readFile() {
    const path = join("text_files", "hellllo.txt");

    const data = await Deno.readTextFile(path);

    console.log(data);
}

await readFile();

// async function readDir() {
//     for await (const dirEntry of Deno.readDir(".")) {
//         console.log(dirEntry.name);
//     }
// }

// await readDir();