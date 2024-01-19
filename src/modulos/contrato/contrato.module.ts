import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ContratoController],
  providers: [ContratoService, PrismaService],
})
export class ContratoModule {}
