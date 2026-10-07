import fs from "fs";
export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() // !injected dependencies
  {}

  execute({fileContent, fileDestination = "output", fileName = "table"}: Options): boolean {
    try {
        console.log("SaveFile executing");
        
        fs.mkdirSync(fileDestination, { recursive: true });
        fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
        console.log(`File saved in ${fileDestination}/${fileName}`);
        return true;
      
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
