import { CreateTable } from "../domain/use-cases/create-table.use-case.ts";
import { SaveFile } from "../domain/use-cases/save-file.use-case.ts";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}
export class ServerApp {
    static run({base, limit, showTable, name, destination}: RunOptions) {
        console.log("server running...");
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({fileContent: table,fileDestination: destination, fileName: name});
        if(showTable) console.log(table);
        if(wasCreated) console.log("File created successfully");
        else console.log("File not created");
    }
}