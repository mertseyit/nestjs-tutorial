import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('product')
export class ProductController {
  @Get('all')
  findAll() {
    //the database
    return 'All Products Returned';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return `One Product Returned. Product ID: ${id} and sort: ${sort}`;
  }

  @Post('create')
  createProduct(
    @Body()
    body: CreateProductDto,
  ) {
    return body;
  }
}
