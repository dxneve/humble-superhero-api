import { Controller, Get, Post, Body } from '@nestjs/common';

import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

import type { ISuperheroesController } from './interfaces';
import type { Superhero } from './entities/superhero.entity';

@Controller('superheroes')
export class SuperheroesController implements ISuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  async create(
    @Body() createSuperheroDto: CreateSuperheroDto
  ): Promise<Superhero> {
    try {
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
