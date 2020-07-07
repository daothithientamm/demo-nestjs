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
import { Response } from "express";

@Controller("cats")
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    console.log(createCatDto);
    res
      .status(HttpStatus.CREATED)
      .json({ message: "This action adds a new cat" });
  }

  @Get()
  // send any http code to client
  @HttpCode(203)
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query["limit"]} items)`;
  }

  @Get("ab*cd")
  // return header of response to client
  @Header('Cache-Control', 'none')
  find() {
    return "This route uses a wildcard";
  }

  @Get(":id")
  // http status has default value is 302
  @Redirect('https://nestjs.com', HttpStatus.MOVED_PERMANENTLY)
  findOne(@Param("id") id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return `This action removes a #${id} cat`;
  }
}
