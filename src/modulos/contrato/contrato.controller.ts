import { Controller } from '@nestjs/common';
import { ContratoService } from './contrato.service';

@Controller('contrato')
export class ContratoController {
  constructor(private readonly contratoService: ContratoService) {}
}
