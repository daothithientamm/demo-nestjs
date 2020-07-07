import { CreateCatDto, UpdateCatDto, ListAllEntities } from "./dto";
import { Response } from "express";
export declare class CatsController {
    create(createCatDto: CreateCatDto, res: Response): void;
    findAll(query: ListAllEntities): string;
    find(): string;
    findOne(id: string): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
