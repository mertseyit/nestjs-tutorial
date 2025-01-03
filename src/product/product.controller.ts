import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/createProduct.dto';
import { IdParamDTO } from './dto/idParamDto.dto';

@Controller('product')
export class ProductController {
  @Get('all')
  findAll() {
    //the database
    return 'All Products Returned';
  }

  @Get(':id')
  findOne(@Param() params: IdParamDTO, @Headers() headers) {
    return headers;
  }

  @Post('create')
  createProduct(
    @Body()
    body: CreateProductDto,
  ) {
    return body;
  }
}
