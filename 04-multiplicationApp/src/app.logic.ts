import fs from 'fs';
import { yarg } from './plugins/args.plugin.ts';
const {b, l, s} = yarg

const number = b;
const separator = '================';
const rows: string[] = [];

for (let i = 1; i <= l; i++) {
  rows.push(`${number} x ${i} = ${number * i}`);
}

const table = [separator, `  Tabla del ${number}`, separator, ...rows, separator].join('\n');

const outputPath = 'output/'
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}table-${number}.txt`, table);
console.log(`Tabla del ${number} guardada en ${outputPath}table-${number}.txt`);

if(s) console.log(table);