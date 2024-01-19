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

  async findOne(id: string) {
    const usuario = await this.prisma.usuarios.findFirst({
      where: {
        id,
      },
    });

    if (!usuario) {
      throw new Error('Usuário não encontrado.');
    }

    return usuario;
  }

  async findAll() {
    return this.prisma.usuarios.findMany();
  }

  async update(id: string, data: UsuarioDTO) {
    const usuarioExiste = await this.prisma.usuarios.findUnique({
      where: {
        id,
      },
    });

    if (!usuarioExiste) {
      throw new Error('Usuário não existe.');
    }

    return await this.prisma.usuarios.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const usuarioExiste = await this.prisma.usuarios.findUnique({
      where: {
        id,
      },
    });

    if (!usuarioExiste) {
      throw new Error('Usuário não existe.');
    }

    return await this.prisma.usuarios.delete({
      where: {
        id,
      },
    });
  }
}
