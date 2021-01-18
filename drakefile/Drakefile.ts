import { desc, run, task, sh } from "https://deno.land/x/drake@v1.4.6/mod.ts";

desc("Minimal Drake Task");
task("test", [], async function() {
    console.log("Hello from drake");
    await sh("deno run --allow-env main.ts");
})

run()