import { BR } from '../../';

describe('Teste função de formatar NUMERO', () => {
  it('Teste input number 123456.789', () => {
    expect(BR.NUMERO.mask(123456.789)).toEqual('123.456,789');
  });
  it('Teste input string 123456.789', () => {
    expect(BR.NUMERO.mask('123456.789')).toEqual('123.456,789');
  });
});

describe('Teste função de limpar NUMERO', () => {
  it('Teste output number 123.456,789', () => {
    expect(BR.NUMERO.clean('123.456,789')).toEqual(123456.789);
  });
  it('Teste output string 123456.789', () => {
    expect(BR.NUMERO.clean('123.456,789', 'string')).toEqual('123456.789');
  });
});
