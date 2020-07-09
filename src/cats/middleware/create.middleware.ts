import { WHITELIST } from './../../config/whitelist';
import { Injectable, NestMiddleware ,HttpException} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status';
import { filteredBody } from '../../utils/filterBody';
@Injectable()
export class CreateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const catPrefix = 'cats';
      const catBody = filteredBody(
        req.body,
        WHITELIST.cats.create,
        catPrefix,
      );
      if(catBody["id"] === undefined){
        throw {
          errorCode: HttpStatus.BAD_REQUEST ,
          message: 'Id is required',
        };
      }
      req.body = catBody;
       return next();

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.errorCode,
          message: error.message,
          data: [],
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  
}
