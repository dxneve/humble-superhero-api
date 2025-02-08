import { Controller, Get, Post, Body, ConflictException } from '@nestjs/common';

import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

import type { ISuperheroesController } from './interfaces';
import type { Superhero } from './entities/superhero.entity';

@Controller('superheroes')
export class SuperheroesController implements ISuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  async create(@Body() createSuperheroDto: CreateSuperheroDto): Promise<void> {
    const { name } = createSuperheroDto;

    try {
      const superheroExists = await this.superheroesService.findOne(name);

      if (superheroExists) {
        throw new ConflictException(
          `the name ${name} is already taken, please, enter a unique name`
        );
      }

      return this.superheroesService.create(createSuperheroDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll(): Promise<Superhero[]> {
    return this.superheroesService.findAll();
  }
}
