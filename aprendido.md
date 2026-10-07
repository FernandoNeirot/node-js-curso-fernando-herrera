# Lo que fui usando

Notas del curso, carpeta por carpeta. Sirve para recordar el concepto y la herramienta, no para reemplazar el código.

## 01-fundamentos

JavaScript puro en Node, sin `package.json`.

- `console.log` y variables.
- `fs`: leer un archivo con `readFileSync` y escribir otro con `writeFileSync`.
- Reemplazar texto con una expresión regular (`/react/ig`).
- Contar palabras con `split` y `match`.
- Event loop: `setTimeout` no frena el programa. Aunque el tiempo sea `0`, el callback corre después del código síncrono.

Archivos: `app.js`, `app2.js`, `app3.js`, `app4.js`.

## 02-bases

Primera app con estructura. Empezó en JavaScript y quedó migrada a TypeScript.

Conceptos:

- `require` / `module.exports`, y después `import` / `export`.
- Destructuring de `process.env`.
- Callbacks: `getUserById` avisa error o usuario.
- Factory: `buildMakePerson` recibe `getIdPlugin` y `getAgePlugin` y devuelve una función.
- `async` / `await` para pedir un Pokémon.
- Plugins separados: id, edad, HTTP y logger. `plugins/index.ts` los reexporta.
- Declaración de tipos propia para `get-age` (`src/types/get-age.d.ts`).

Herramientas:

- npm y pnpm. Scripts `dev`, `build` y `start`.
- Nodemon para reiniciar al guardar.
- TypeScript (`tsc`), `tsconfig.json`, carpeta `dist`.
- Jest y ts-jest. Tests en `tests/`, coverage en `coverage/`.
- `.gitignore` para `node_modules`, `dist` y logs.

Paquetes: `axios`, `uuid`, `get-age`, `winston`.

## 03-typescript

TypeScript desde el inicio, con un ejemplo de héroes.

- Interfaces (`Hero`).
- Módulos: datos en `src/data`, lógica en `src/services`.
- `find`, optional chaining (`hero?.name`) y `??`.
- `tsc` compila `src` a `dist`. El script `start` ejecuta `dist/app.js`, no el `.ts`.
- `verbatimModuleSyntax`: en CommonJS no se puede usar `export` tal cual. Con esa opción en `false`, TypeScript lo convierte a `exports`.
- Node puede ejecutar TypeScript con `--experimental-strip-types`, pero no transforma `import` a `require`.

## 04-multiplicationApp

App de consola que arma la tabla de multiplicar y la guarda en un archivo.

- Argumentos con `yargs`: `-b` base, `-l` límite, `-s` mostrar, `-n` nombre, `-d` destino.
- `hideBin(process.argv)` saca `node` y el nombre del script.
- Capas: `domain` (casos de uso), `presentation` (`ServerApp`), `config` (argumentos).
- `CreateTable` arma el texto. `SaveFile` crea la carpeta y escribe el `.txt`.
- Proyecto ESM (`"type": "module"`). Los imports relativos llevan extensión `.ts`.
- Jest con `spyOn` y `mockImplementation` para no tocar el disco en los tests.
- `ts-node` funciona con TypeScript 5.9. Con TypeScript 7 se cae porque ya no existe `ts.sys`.

Comando de desarrollo: `npm run dev` (Nodemon pasa `-b 5 -s`).

## 05-NOC

Servicio que revisa si una URL responde, repetido con un cron.

- `Server.start()` arranca el proceso.
- `CronService` crea un `CronJob`. La expresión `*/5 * * * * *` corre cada 5 segundos.
- `CheckService` hace `fetch` a una URL. Si responde bien llama al callback de éxito; si falla, al de error.
- Misma idea de capas: `domain/use-cases` y `presentation`.
- Paquete `cron`.

## 06-json-server

API falsa para probar el NOC u otras peticiones, sin escribir un backend.

- `db.json` define `posts`, `comments` y `profile`.
- `npm start` ejecuta `json-server --watch db.json --port 3000`.
- Al cambiar `db.json`, el servidor recarga los datos.

## Git, en la raíz

- El repositorio está en esta carpeta `Node`.
- `.gitignore` dentro de cada proyecto evita subir `node_modules` y `dist`.
- El remoto es `node-js-curso-fernando-herrera`.
- Identidad local del repo: FernandoNeirot / fernando.neirot@hotmail.com.
