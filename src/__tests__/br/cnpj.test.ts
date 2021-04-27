import { BR } from '../../';

describe('Teste função de formatar CNPJ', () => {
  it('Teste input number 34234234234234', () => {
    expect(BR.CNPJ.mask(34234234234234)).toEqual('34.234.234/2342-34');
  });
  it('Teste input string 34234234234234', () => {
    expect(BR.CNPJ.mask('34234234234234')).toEqual('34.234.234/2342-34');
  });
});

describe('Teste função de limpar CNPJ', () => {
  it('Teste output number 34.234.234/2342-34', () => {
    expect(BR.CNPJ.clean('34.234.234/2342-34')).toEqual(34234234234234);
  });
  it('Teste output string 34234234234234', () => {
    expect(BR.CNPJ.clean('34.234.234/2342-34', 'string')).toEqual(
      '34234234234234',
    );
  });
});
