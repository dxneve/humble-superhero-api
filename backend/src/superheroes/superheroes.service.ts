import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { superheroesInMemoryRepository } from './repository';

import type { ISuperheroesService } from './interfaces';
import type { CreateSuperheroDto } from './dto/create-superhero.dto';
import type { Superhero } from './entities/superhero.entity';

@Injectable()
export class SuperheroesService implements ISuperheroesService {
  private readonly repository = [...superheroesInMemoryRepository];

  async create(createSuperheroDto: CreateSuperheroDto): Promise<Superhero> {
    const newSuperhero = { id: randomUUID(), ...createSuperheroDto };

    this.repository.push(newSuperhero);

    return newSuperhero;
  }

  async findAll(): Promise<Superhero[]> {
    return this.repository.sort((a, b) => b.humility - a.humility);
  }
}
