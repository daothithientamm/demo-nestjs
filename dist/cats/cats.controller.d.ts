import { CreateCatDto, UpdateCatDto } from "./dto";
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Response } from "express";
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto, res: Response): Promise<void>;
    findAll(): Promise<Cat[]>;
    find(): string;
    findOne(id: string): Promise<Object>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<Cat[]>;
    remove(id: string): string;
}
