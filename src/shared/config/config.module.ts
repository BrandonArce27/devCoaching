import { Module, Global } from '@nestjs/common';

import { ConfigService } from './config.service';

import Environment from './model/environment.enum';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(
        `.env.${process.env.NODE_ENV || Environment.LOCAL}`,
      ),
    },
  ],
  exports: [ConfigService],
  imports: [],
})
export class ConfigModule {
  constructor(private configService: ConfigService) {}
}
