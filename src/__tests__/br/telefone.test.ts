import { BR } from '../../';

describe('Teste função de formatar TELEFONE', () => {
  it('Teste input number 3432464300', () => {
    expect(BR.TELEFONE.mask(3432464300)).toEqual('(34) 3246-4300');
  });
  it('Teste input string 3432464300', () => {
    expect(BR.TELEFONE.mask('3432464300')).toEqual('(34) 3246-4300');
  });
});

describe('Teste função de limpar TELEFONE', () => {
  it('Teste output number (34) 3246-4300', () => {
    expect(BR.TELEFONE.clean('(34) 3246-4300')).toEqual(3432464300);
  });
  it('Teste output string 3432464300', () => {
    expect(BR.TELEFONE.clean('(34) 3246-4300', 'string')).toEqual('3432464300');
  });
});
