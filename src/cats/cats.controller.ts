import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  Put,
  HttpStatus,
  Delete,
  Res,
  HttpCode,
  Header,
  Redirect
} from "@nestjs/common";
import { CreateCatDto, UpdateCatDto, ListAllEntities } from "./dto";
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Response } from "express";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    this.catsService.create(createCatDto);
    res
      .status(HttpStatus.CREATED)
      .json({ message: "This action adds a new cat" });
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get("ab*cd")
  // return header of response to client
  @Header('Cache-Control', 'none')
  find() {
    return "This route uses a wildcard";
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Object>  {
    return this.catsService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
    this.catsService.updateOne(id, updateCatDto);
    return this.catsService.findAll();
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes a #${id} cat`;
  }
}
