import { IsBoolean, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'name must be string (custom message)' })
  name: string;
  @IsInt({ message: 'price must be number (custom message)' })
  @IsPositive({ message: 'price must be positive' })
  price: number;
  @IsBoolean()
  isSelled: boolean;
}
