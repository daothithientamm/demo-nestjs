import { NestMiddleware } from '@nestjs/common';
export declare class CatsMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
