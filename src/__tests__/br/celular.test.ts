import { BR } from '../../';

describe('Teste função de formatar CELULAR', () => {
  it('Teste input number 1195862597', () => {
    expect(BR.CELULAR.mask(1195862597)).toEqual('(11) 9586-2597');
  });
  it('Teste input string 1195862597', () => {
    expect(BR.CELULAR.mask('1195862597')).toEqual('(11) 9586-2597');
  });
});

describe('Teste função de limpar CELULAR', () => {
  it('Teste output number (11) 9586-2597', () => {
    expect(BR.CELULAR.clean('(11) 9586-2597')).toEqual(1195862597);
  });
  it('Teste output string 1195862597', () => {
    expect(BR.CELULAR.clean('(11) 9586-2597', 'string')).toEqual('1195862597');
  });
});
