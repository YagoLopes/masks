import { BR } from '../../index';

describe('Teste função de formatar porcentagem', () => {
  it('Teste number 13.5', () => {
    expect(BR.PORCENTAGEM.mask(13.5)).toEqual('13,50%');
  });
  it('Teste string 13.50', () => {
    expect(BR.PORCENTAGEM.mask('13.50')).toEqual('13,50%');
  });

  it('Teste number 3.5', () => {
    expect(BR.PORCENTAGEM.mask(3.5)).toEqual('3,50%');
  });
  it('Teste string 3.5', () => {
    expect(BR.PORCENTAGEM.mask('3.50')).toEqual('3,50%');
  });

  it('Teste number 13', () => {
    expect(BR.PORCENTAGEM.mask(13)).toEqual('13,00%');
  });
  it('Teste string 13', () => {
    expect(BR.PORCENTAGEM.mask('13')).toEqual('13,00%');
  });

  it('Teste number 13.53', () => {
    expect(BR.PORCENTAGEM.mask(13.53)).toEqual('13,53%');
  });
  it('Teste string 13.53', () => {
    expect(BR.PORCENTAGEM.mask('13.53')).toEqual('13,53%');
  });
});

describe('Teste função de limpar porcentagem', () => {
  it('Teste number 13,50%', () => {
    expect(BR.PORCENTAGEM.clean('13,50%')).toEqual(13.5);
  });
  it('Teste string 13,50%', () => {
    expect(BR.PORCENTAGEM.clean('13,50%', 'string')).toEqual('13.50');
  });

  it('Teste number 3,50%', () => {
    expect(BR.PORCENTAGEM.clean('3,50%')).toEqual(3.5);
  });
  it('Teste string 3,50%', () => {
    expect(BR.PORCENTAGEM.clean('3,50%', 'string')).toEqual('3.50');
  });

  it('Teste number 13,00%', () => {
    expect(BR.PORCENTAGEM.clean('13,00%')).toEqual(13);
  });
  it('Teste string 13,00%', () => {
    expect(BR.PORCENTAGEM.clean('13,00%', 'string')).toEqual('13.00');
  });

  it('Teste string 13,53%', () => {
    expect(BR.PORCENTAGEM.clean('13,53%')).toEqual(13.53);
  });
  it('Teste string 13,53%', () => {
    expect(BR.PORCENTAGEM.clean('13,53%', 'string')).toEqual('13.53');
  });
});
