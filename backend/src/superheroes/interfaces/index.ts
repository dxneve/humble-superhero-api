import type { CreateSuperheroDto } from '../dto/create-superhero.dto';
import type { UpdateSuperheroDto } from '../dto/update-superhero.dto';
import type { Superhero } from '../entities/superhero.entity';

export interface ISuperheroesService {
  create(createSuperheroDto: CreateSuperheroDto): Promise<void>;
  findAll(): Promise<Superhero[]>;

  findOne?(name: string): Promise<Superhero | undefined>;
  update?(name: string, updateSuperheroDto: UpdateSuperheroDto): Promise<void>;
  remove?(name: string): Promise<void>;
}

export interface ISuperheroesController {
  create(createSuperheroDto: CreateSuperheroDto): Promise<void>;
  findAll(): Promise<Superhero[]>;
}
