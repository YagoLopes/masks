import { BR } from '../../';

describe('Teste função de formatar CARTAO', () => {
  it('Teste input number 1234567891234567', () => {
    expect(BR.CARTAO.mask(1234567891234567)).toEqual('1234 5678 9123 4567');
  });
  it('Teste input string 1234567891234567', () => {
    expect(BR.CARTAO.mask('1234567891234567')).toEqual('1234 5678 9123 4567');
  });
});

describe('Teste função de limpar CARTAO', () => {
  it('Teste output number 1234 5678 9123 4567', () => {
    expect(BR.CARTAO.clean('1234 5678 9123 4567')).toEqual(1234567891234567);
  });
  it('Teste output string 34234234234234', () => {
    expect(BR.CARTAO.clean('34.234.234/2342-34', 'string')).toEqual(
      '34234234234234',
    );
  });
});
