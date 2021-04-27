import { BR } from '../../';

describe('Teste função de formatar RG', () => {
  it('Teste input number 698554859', () => {
    expect(BR.RG.mask(698554859)).toEqual('69.855.485-9');
  });
  it('Teste input string 698554859', () => {
    expect(BR.RG.mask('698554859')).toEqual('69.855.485-9');
  });
});

describe('Teste função de limpar RG', () => {
  it('Teste output number 69.855.485-9', () => {
    expect(BR.RG.clean('69.855.485-9')).toEqual(698554859);
  });
  it('Teste output string 698554859', () => {
    expect(BR.RG.clean('69.855.485-9', 'string')).toEqual('698554859');
  });
});
