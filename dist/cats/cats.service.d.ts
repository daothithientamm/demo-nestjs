import { Cat } from './interfaces/cat.interface';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
    findOne(id: string): Cat;
    updateOne(id: string, data: Object): void;
}
