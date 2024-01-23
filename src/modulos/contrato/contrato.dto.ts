export type ContratoDTO = {
  id: string;
  modalidade: string;
  data_inicio: Date | string;
  data_fim: Date | string;
  data_recisao?: Date | string | null;
  usuarios: null;
  solicitacao_ferias?: null;
};
