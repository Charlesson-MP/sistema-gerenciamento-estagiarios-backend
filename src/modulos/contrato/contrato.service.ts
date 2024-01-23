import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContratoDTO } from './contrato.dto';

@Injectable()
export class ContratoService {
  constructor(private prisma: PrismaService) {}

  async create(data: ContratoDTO) {
    const contratoExiste = await this.prisma.contratos.findFirst({
      where: {
        id: data.id,
      },
    });

    if (contratoExiste) {
      throw new Error('Contrato já cadastrado.');
    }

    const usuarioExiste = await this.prisma.usuarios.findFirst({
      where: {
        id: data.usuarios,
      },
    });

    if (!usuarioExiste) {
      throw new Error('Usuário não cadastrado.');
    }

    const contrato = await this.prisma.contratos.create({
      data,
    });

    return contrato;
  }
}
