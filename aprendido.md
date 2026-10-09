# 05-NOC

Servicio que, cada 5 segundos, pregunta si `http://localhost:3000` responde y deja el resultado en archivos de log.

El arranque está en `src/app.ts`. Ahí se llama `Server.start()`. `server.ts` solo define la clase: si `start()` también se ejecuta al importar el archivo, el cron queda registrado dos veces y cada evento se guarda duplicado.

## Capas

El dominio no sabe si el log va a un archivo, a una base o a la consola. La infraestructura sí.

- `domain/entities/log.entity.ts`: el log. Niveles `low`, `medium` y `high`, más `message` y `createdAt`. `fromJson` reconstruye un log desde una línea del archivo.
- `domain/datasource/log.datasource.ts`: contrato abstracto. Obliga a implementar `saveLog` y `getLogs`. No se instancia.
- `domain/repository/log.repositor.ts`: el mismo contrato, visto desde los casos de uso. El caso de uso pide “guardá este log”; no elige el archivo.
- `domain/use-cases/checks/check-service.ts`: hace `fetch` a la URL. Si responde bien, guarda un log `low` y llama al callback de éxito. Si falla, guarda un log `high` y llama al de error.
- `infrastructure/datasources/file-system.datasource.ts`: implementación concreta. Crea `logs/` y escribe `logs-all.log`, `logs-medium.log` y `logs-high.log`.
- `infrastructure/datasources/repositoties/log.repository.impl.ts`: recibe un datasource en el constructor y le delega `saveLog` y `getLogs`.
- `presentation/server.ts`: arma el cron, el repositorio y el chequeo.
- `presentation/cron/cron-service.ts`: envuelve `CronJob` para no usar el paquete directo en el server.

`CheckService` recibe el repositorio y los dos callbacks por el constructor. `LogRepositoryImpl` recibe el datasource igual. Cambiar el destino del log no obliga a tocar el caso de uso.

## Qué hace cada pieza al correr

`CronService.createJob` recibe la expresión `*/5 * * * * *` (cada 5 segundos) y la función `onTick`. `job.start()` lo deja activo.

En cada tick, `CheckService.execute` pide la URL. El datasource agrega una línea JSON:

- todo log entra en `logs-all.log`;
- `low` no se copia a otro archivo;
- `medium` también va a `logs-medium.log`;
- `high` también va a `logs-high.log`.

La carpeta `logs/` se crea con `mkdirSync`. `writeFileSync` no crea directorios: si se usa sobre `logs/`, Node crea un archivo con ese nombre y después falla al abrir `logs/logs-all.log`.

## Herramientas

- TypeScript en CommonJS. `verbatimModuleSyntax` está en `false` para poder usar `export class`.
- `"types": ["node"]` y `@types/node` para que existan `fs` y el resto de Node.
- `esModuleInterop` para `import fs from "fs"`.
- Script `dev`: `tsnd --respawn --clear src/app.ts`. `ts-node` funciona con TypeScript 5.9. Con TypeScript 7 se cae porque ya no existe `ts.sys`.
- Paquete `cron` para el job. `json-server` está en las dependencias; el chequeo apunta a un servidor en el puerto 3000.
