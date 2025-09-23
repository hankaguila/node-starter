import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pkg from "../package.json" with { type: "json" };
import { toPosix } from "./utils";

export const rootDir = toPosix(
  process.env.INIT_CWD ?? join(dirname(fileURLToPath(new URL(".", import.meta.url))), "..")
);

export const appName = pkg.name as string;
export const appVersion = pkg.version as string;
