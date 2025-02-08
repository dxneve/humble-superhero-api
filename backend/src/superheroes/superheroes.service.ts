import { Injectable } from '@nestjs/common';

import { superheroesInMemoryRepository } from './repository';

import type { ISuperheroesService } from './interfaces';
import type { CreateSuperheroDto } from './dto/create-superhero.dto';
import type { Superhero } from './entities/superhero.entity';

@Injectable()
export class SuperheroesService implements ISuperheroesService {
  private readonly repository = [...superheroesInMemoryRepository];

  async create(createSuperheroDto: CreateSuperheroDto): Promise<void> {
    this.repository.push({ ...createSuperheroDto });
  }

  async findAll(): Promise<Superhero[]> {
    return this.repository;
  }

  async findOne(name: string): Promise<Superhero> {
    return this.repository.find((superhero) => superhero.name === name);
  }
}
