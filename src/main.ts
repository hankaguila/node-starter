import { appName, appVersion, rootDir } from "./config";
import greet from "./greet";

console.log({ rootDir, appName, appVersion });
greet();
