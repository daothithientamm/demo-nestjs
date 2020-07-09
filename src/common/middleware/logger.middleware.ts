import { Injectable, NestMiddleware ,HttpException} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    try {
        throw {
          errorCode: 'auth/unauthorized',
          message: 'Authentication token is missing',
        };

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: error.errorCode,
          message: error.message,
          data: [],
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
  
}
