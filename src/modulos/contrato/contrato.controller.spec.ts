import { Test, TestingModule } from '@nestjs/testing';
import { ContratoController } from './contrato.controller';
import { ContratoService } from './contrato.service';

describe('ContratoController', () => {
  let controller: ContratoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContratoController],
      providers: [ContratoService],
    }).compile();

    controller = module.get<ContratoController>(ContratoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
