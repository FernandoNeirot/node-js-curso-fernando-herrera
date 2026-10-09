import {CronJob} from 'cron';
import { CronService } from './cron/cron-service';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { LogRepositoryImpl } from '../infrastructure/datasources/repositoties/log.repository.impl';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource);
export class Server {
 public static start() {
    console.log('Server is running on port 3000');
    const job = CronService.createJob({cronTime: '*/5 * * * * *', onTick: () => {
        const url = 'http://localhost:3000';
        new CheckService(
            fileSystemLogRepository,
            () => {
                console.log(`${url} is up and running`);
            },
            (error) => {
                console.log(`${url} is down`);
            }
        ).execute(url);
    }});
    job.start();
    console.log('Job started');
 }
}