import { UsuarioDTO } from '../usuario/usuario.dto';

export type ContratoDTO = {
  id: string;
  modalidade: string;
  data_inicio: Date;
  data_fim: Date;
  data_recisao?: Date;
  usuario: UsuarioDTO;
};
