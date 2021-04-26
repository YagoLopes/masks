import { BR } from '../../index';

describe('Teste função de formatar porcentagem', () => {
  it('Teste com zero a direita', () => {
    expect(BR.PORCENTAGEM.mask(13.5)).toEqual('13,50%');
  });

  it('Teste 3.5', () => {
    expect(BR.PORCENTAGEM.mask(3.5)).toEqual('3,50%');
  });

  it('Teste 13', () => {
    expect(BR.PORCENTAGEM.mask(13)).toEqual('13,00%');
  });

  it('Teste 13.53', () => {
    expect(BR.PORCENTAGEM.mask(13.53)).toEqual('13,53%');
  });
});
