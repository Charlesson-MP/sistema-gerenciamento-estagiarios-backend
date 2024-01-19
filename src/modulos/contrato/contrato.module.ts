import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';

@Module({
  controllers: [ContratoController],
  providers: [ContratoService],
})
export class ContratoModule {}
