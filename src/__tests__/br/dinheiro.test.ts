import { BR } from '../../';

describe('Teste função de formatar DINHEIRO', () => {
  it('Teste input number 123456.78', () => {
    expect(BR.DINHEIRO.mask(123456.78)).toBe(`R$ 123.456,78`);
  });
  it('Teste input string 123456.78', () => {
    expect(BR.DINHEIRO.mask('123456.78')).toEqual('R$ 123.456,78');
  });
  it('Teste input string com zero a direita 123456.00', () => {
    expect(BR.DINHEIRO.mask('123456.00')).toEqual('R$ 123.456,00');
  });
  it('Teste input number sem zero a direita 123456', () => {
    expect(BR.DINHEIRO.mask(123456)).toEqual('R$ 123.456,00');
  });
});

describe('Teste função de limpar DINHEIRO', () => {
  it('Teste output number R$ 123.456,78', () => {
    expect(BR.DINHEIRO.clean('R$ 123.456,78')).toBe(123456.78);
  });
  it('Teste output string R$ 123.456,78', () => {
    expect(BR.DINHEIRO.clean('R$ 123.456,78')).toEqual(123456.78);
  });
  it('Teste output string com zero a direita R$ 123.456,00', () => {
    expect(BR.DINHEIRO.clean('R$ 123.456,00')).toEqual(123456.0);
  });
  it('Teste output number sem zero a direita R$ 123.456,00', () => {
    expect(BR.DINHEIRO.clean('R$ 123.456,00')).toEqual(123456);
  });
});
