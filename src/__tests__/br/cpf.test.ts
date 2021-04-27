import { BR } from '../../index';

describe('Teste função de formatar CPF', () => {
  it('Teste input number 59636985148', () => {
    expect(BR.CPF.mask(59636985148)).toEqual('596.369.851-48');
  });
  it('Teste input string 59636985148', () => {
    expect(BR.CPF.mask('59636985148')).toEqual('596.369.851-48');
  });
});

describe('Teste função de limpar CPF', () => {
  it('Teste output number 596.369.851-48', () => {
    expect(BR.CPF.clean('596.369.851-48')).toEqual(59636985148);
  });
  it('Teste output string 59636985148', () => {
    expect(BR.CPF.clean('596.369.851-48', 'string')).toEqual('59636985148');
  });
});
