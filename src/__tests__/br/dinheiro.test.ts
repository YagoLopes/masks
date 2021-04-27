import { BR } from '../../';

describe('Teste função de formatar DINHEIRO', () => {
  // it('Teste input number 123456.78', () => {
  //   expect(BR.DINHEIRO.mask(123456.78)).toEqual('R$ 123.456,78');
  // });
  // it('Teste input string 123456.78', () => {
  //   expect(BR.DINHEIRO.mask('123456.78')).toEqual('R$ 123.456,78');
  // });
});

describe('Teste função de limpar DINHEIRO', () => {
  it('Teste output number R$ 123.456,78', () => {
    expect(BR.DINHEIRO.clean('R$ 123.456,78')).toEqual(123456.78);
  });
});
