import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { ContratoModule } from './modulos/contrato/contrato.module';

@Module({
  imports: [PrismaModule, UsuarioModule, ContratoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
