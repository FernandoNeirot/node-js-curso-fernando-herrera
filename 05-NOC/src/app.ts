import { envs } from "./congif/plugins/envs.plugin";
import { Server } from "./presentation/server";

function main() {
    console.log(envs.MAILER_EMAIL, envs.MAILER_PASSWORD);
}
(async()=>{
    main();
})();