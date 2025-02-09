import { IsInt, IsString, Length, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateSuperheroDto {
  @IsString()
  @Length(1, 70)
  @Transform((name) => name.value.charAt(0).toUpperCase() + name.value.slice(1))
  name: string;

  @IsString()
  @Length(3, 255)
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humility: number;
}
