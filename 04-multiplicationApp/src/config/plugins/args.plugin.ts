import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// export const yarg = yargs(hideBin(process.argv)).parseSync();
export const yarg = await yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "The base of the table",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    demandOption: false,
    describe: "Limit the table",
    default: 10,
  })
  .options("s", {
    alias: "show",
    type: "boolean",
    demandOption: false,
    describe: "Show the table",
    default: false,
  })
  .options("n", {
    alias: "name",
    type: "string",    
    describe: "File name",
    default: "table",
  })
  .options("d", {
    alias: "destination",
    type: "string",
    describe: "Destination of the file",
    default: "./outputs",
  })
  .check((argv) => {
    if (argv.b < 1) {
      throw new Error("The base must be greater than 0");
    }
    return true;
  })
  .parseAsync();
