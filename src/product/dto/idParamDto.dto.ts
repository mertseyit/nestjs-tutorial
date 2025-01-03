import { IsInt, IsPositive } from 'class-validator';

export class IdParamDTO {
  @IsInt({ message: 'id must be integer number' })
  @IsPositive({ message: 'id must be positive' })
  id: number;
}
