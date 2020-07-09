import { Module,NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateMiddleware } from './middleware/create.middleware';

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
  })
export class CatsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(CreateMiddleware)
        .forRoutes({path: "cats",  method: RequestMethod.POST});
    }
  }
