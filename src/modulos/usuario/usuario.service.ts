import { Injectable } from '@nestjs/common';
import { UsuarioDTO } from './usuario.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  async create(data: UsuarioDTO) {
    const usuarioExiste = await this.prisma.usuarios.findFirst({
      where: {
        id: data.id,
      },
    });

    if (usuarioExiste) {
      throw new Error('Usuário já cadastrado.');
    }

    const usuario = await this.prisma.usuarios.create({
      data,
    });

    return usuario;
  }

  async findAll() {
    return this.prisma.usuarios.findMany();
  }
}
