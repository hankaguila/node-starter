import { appName, appVersion, rootDir } from "./config.js";
import greet from "./greet.js";

console.log({ rootDir, appName, appVersion });
greet();
