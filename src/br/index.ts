import { cleanMask } from '../utils';
export const CPF = {
  /**
   * Máscara de CPF
   * @example
   * mask('59636985148')
   * // returns 596.369.851-48
   * @param {string} value Valor que será transformado em CPF
   */
  mask: (value: string | number): string => {
    const ret = String(value);

    return ret
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },
  /**
   * Limpa a string que já esta formatado pela máscara de CPF
   * @example
   * clean('596.369.851-48')
   * // returns 59636985148
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

export const RG = {
  /**
   * Máscara de RG
   * @example
   * mask('698554859')
   * // returns 69.855.485-9
   * @param {string} value Valor que será transformado em RG
   */
  mask: (value: string | number): string => {
    const ret = String(value);
    return ret
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1');
  },
  /**
   * Limpa a string que já esta formatado pela máscara de RG
   * @example
   * clean('69.855.485-9')
   * // returns 698554859
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

export const CNPJ = {
  /**
   * Máscara de CNPJ
   * @example
   * mask('34234234234234')
   * // returns 34.234.234/2342-34
   * @param {string} value Valor que será transformado em CNPJ
   */
  mask: (value: string | number): string => {
    const ret = String(value);
    return ret
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },
  /**
   * Limpa a string que já esta formatado pela máscara de CNPJ
   * @example
   * clean('34.234.234/2342-34')
   * // returns 34234234234234
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

export const CELULAR = {
  /**
   * Máscara de Celular
   * @example
   * mask('11958625974')
   * // returns (11) 95862-5974
   *
   * mask('1195862597')
   * // returns (11) 9586-2597
   * @param {string} value Valor que será transformado em Celular
   */
  mask: (value: string | number): string => {
    const ret = String(value);

    if ((ret && ret.length <= 10) || ret.length === 14) {
      return TELEFONE.mask(ret);
    }

    return ret
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  },

  /**
   * Limpa a string que já esta formatado pela máscara de Celular
   * @example
   * clean('(11) 95862-5974')
   * // returns 11958625974
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

export const TELEFONE = {
  /**
   * Máscara de Telefone
   * @example
   * mask('1195862597')
   * // returns (11) 9586-2597
   * @param {string} value Valor que será transformado em Telefone
   */
  mask: (value: string | number): string => {
    const ret = String(value);

    return ret
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  },

  /**
   * Limpa a string que já esta formatado pela máscara de Telefone
   * @example
   * clean('(11) 9586-2597')
   * // returns 1195862597
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

export const CEP = {
  /**
   * Máscara de CEP
   * @example
   * mask('06985596')
   * // returns 06985-596
   * @param {string} value Valor que será transformado em CEP
   */
  mask: (value: string): string => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})(\d)/, '$1');
  },
  /**
   * Limpa a string que já esta formatado pela máscara de CEP
   * @example
   * clean('(11) 9586-2597')
   * // returns 1195862597
   * @param {string} value Valor que será limpo
   */
  clean: (value: string): string => {
    return String(value)
      .replace(/[.\-%() /]/g, '')
      .replace(',', '.');
  },
};
export const NUMERO = {
  /**
   * Máscara de Número
   * @example
   * mask(123456.789)
   * // returns 123.456,789
   * @param {string} value Valor com máscara de Número
   */
  mask: (
    initialValue: string | number,
    config: { minimumFractionDigits: number } = { minimumFractionDigits: 2 },
  ): string => {
    const value = initialValue ? Number(initialValue) : 0;

    return new Intl.NumberFormat('pt-BR', {
      ...config,
      style: 'decimal',
    }).format(value);
  },
  /**
   * Limpa a string que já esta formatado pela máscara de Número
   * @example
   * clean('123.456,789')
   * // returns 123456.789
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

export const PORCENTAGEM = {
  /**
   * Máscara de Porcentagem
   * @example
   * mask(26.95)
   * // returns 26,95%
   * @param {string} value Valor com máscara de Porcentagem
   */
  mask: (initialValue: string | number): string => {
    const value = initialValue ? Number(initialValue) : 0;

    return `${NUMERO.mask(value)}%`;
  },
  /**
   * Limpa a string que já esta formatado pela máscara de Porcentagem
   * @example
   * clean('26,95%')
   * // returns 26.95
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};

interface DinheiroMaskConfig {
  currency?: string;
  locale?: string;
}

export const DINHEIRO = {
  /**
   * Máscara de Dinheiro
   * @example
   * mask(123456.78)
   * // returns R$ 123.456,78
   * @param {string} value Valor com máscara de Dinheiro
   */
  mask: (
    initialValue: number | string,
    options?: DinheiroMaskConfig,
  ): string => {
    const opts = {
      currency: 'BRL',
      ...options,
      style: 'currency',
      locale: undefined,
    };
    const locale = options?.locale || 'pt-BR';

    const value = initialValue ? Number(initialValue) : 0;

    return new Intl.NumberFormat(locale, opts)
      .format(value)
      .replace(/\s/g, ' ');
  },

  /**
   * Limpa a string que já esta formatado pela máscara de dinheiro
   * @example
   * cleanMoneyMask('R$ 1.150,12')
   * // returns 1150.12
   * @param {string} value Valor que será limpo
   */
  clean: (value: string): number => {
    return parseFloat(
      String(value)
        .replace(/[R$.\-() /]/g, '')
        .replace(',', '.'),
    );
  },
};

export const CARTAO = {
  /**
   * Máscara de Cartão
   * @example
   * mask(1234567891234567)
   * // returns '1234 5678 9123 4567'
   * @param {string} value Valor com máscara
   */
  mask: (initialValue: string | number): string => {
    return String(initialValue)
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/( \d{4})(\d)/, '$1 $2')
      .replace(/( \d{4})(\d)/, '$1 $2');
  },

  /**
   * Limpa a string que já esta formatado pela máscara de Porcentagem
   * @example
   * clean('1234 5678 9123 4567')
   * // returns 1234567891234567
   * @param {string} value Valor que será limpo
   */
  clean: cleanMask,
};
