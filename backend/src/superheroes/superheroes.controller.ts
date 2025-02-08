import { Controller, Get, Post, Body } from '@nestjs/common';

import { SuperheroesService } from './superheroes.service';

import type { ISuperheroesController } from './interfaces';
import type { CreateSuperheroDto } from './dto/create-superhero.dto';
import type { Superhero } from './entities/superhero.entity';

@Controller('superheroes')
export class SuperheroesController implements ISuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto): Promise<void> {
    return this.superheroesService.create(createSuperheroDto);
  }

  @Get()
  findAll(): Promise<Superhero[]> {
    return this.superheroesService.findAll();
  }
}
