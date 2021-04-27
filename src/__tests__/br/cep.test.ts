import { BR } from '../../index';

describe('Teste função de formatar CEP', () => {
  it('Teste input string 06985596', () => {
    expect(BR.CEP.mask('06985596')).toEqual('06985-596');
  });
});

describe('Teste função de limpar CEP', () => {
  it('Teste output string 06985596', () => {
    expect(BR.CEP.clean('06985-596')).toEqual('06985596');
  });
});
