import { resolve } from "node:path";

export function toPosix(path: string): string {
  return resolve(path).replace(/\\/g, "/");
}
