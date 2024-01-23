import { Controller, Post, Body } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoDTO } from './contrato.dto';

@Controller('contrato')
export class ContratoController {
  constructor(private readonly contratoService: ContratoService) {}

  @Post()
  async create(@Body() data: ContratoDTO) {
    this.contratoService.create(data);
  }
}
