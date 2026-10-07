// import fs from 'fs';
import { yarg } from './plugins/args.plugin.ts';
import { ServerApp } from './presentation/server-app.ts';

// const number = 5;
// const separator = '================';
// const rows: string[] = [];

// for (let i = 1; i <= 10; i++) {
//   rows.push(`${number} x ${i} = ${number * i}`);
// }

// const table = [separator, `  Tabla del ${number}`, separator, ...rows, separator].join('\n');

// const outputPath = 'output/'
// fs.mkdirSync(outputPath, { recursive: true });
// fs.writeFileSync(`${outputPath}table-${number}.txt`, table);
//console.log(`Tabla del ${number} guardada en ${outputPath}table-${number}.txt`);

(async () => {
  await main();
})();

async function main() {
  const serverApp = new ServerApp();
  serverApp.run();
}