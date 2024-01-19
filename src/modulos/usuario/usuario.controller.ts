import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: UsuarioDTO) {
    this.usuarioService.create(data);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }
}
