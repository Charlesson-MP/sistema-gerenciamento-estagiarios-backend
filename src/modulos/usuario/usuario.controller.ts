import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: UsuarioDTO) {
    this.usuarioService.create(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UsuarioDTO) {
    return this.usuarioService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usuarioService.delete(id);
  }
}
