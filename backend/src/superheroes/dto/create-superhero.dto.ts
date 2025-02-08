import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @Length(1, 70)
  name: string;

  @IsString()
  @Length(3, 255)
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humility: number;
}
