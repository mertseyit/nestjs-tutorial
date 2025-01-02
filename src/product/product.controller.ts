import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('all')
  findAll() {
    //the database
    return 'All Products Returned';
  }

  @Get(':id/:slug')
  findOne(@Param('id') id: string, @Param('slug') slug: string) {
    return `One Product Returned. Product ID: ${id}, Other Parameter: ${slug}`;
  }

  @Post('create')
  createProduct(@Body() body) {
    return body;
  }
}
