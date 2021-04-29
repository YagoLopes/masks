# @yagolopes/masks/br

Biblioteca de máscaras do Brasil

## Instalação

```bash
npm install @yagolopes/masks
```

ou

```bash
yarn add @yagolopes/masks
```

## Utilização

### CPF

```javascript
import { CPF } from '@yagolopes/masks/br';
// ou const { CPF } = require('@yagolopes/masks/br');

// Add mask
const cpf = CPF.mask('59636985148');
console.log(cpf); // '596.369.851-48'

// Clean mask
const cpf = CPF.clean('596.369.851-48');
console.log(cpf); // '59636985148'
```

### RG

```javascript
import { RG } from '@yagolopes/masks/br';
// ou const { RG } = require('@yagolopes/masks/br');

// Add mask
const rg = RG.mask('698554859');
console.log(rg); // '69.855.485-9'

// Clean mask
const rg = RG.clean('69.855.485-9');
console.log(rg); // '698554859'
```

### CNPJ

```javascript
import { CNPJ } from '@yagolopes/masks/br';
// ou const { CNPJ } = require('@yagolopes/masks/br');

// Add mask
const cnpj = CNPJ.mask('34234234234234');
console.log(cnpj); // '34.234.234/2342-34'

// Clean mask
const cnpj = CNPJ.clean('34.234.234/2342-34');
console.log(cnpj); // '34234234234234'
```

### Celular

```javascript
import { CELULAR } from '@yagolopes/masks/br';
// ou const { CELULAR } = require('@yagolopes/masks/br');

// Add mask
const celular = CELULAR.mask('11958625974');
console.log(celular); // '(11) 95862-5974'

// Clean mask
const celular = CELULAR.clean('(11) 95862-5974');
console.log(celular); // '11958625974'
```

### Telefone

```javascript
import { TELEFONE } from '@yagolopes/masks/br';
// ou const { TELEFONE } = require('@yagolopes/masks/br');

// Add mask
const telefone = TELEFONE.mask('1195862597');
console.log(telefone); // '(11) 9586-2597'

// Clean mask
const telefone = TELEFONE.clean('(11) 9586-2597');
console.log(telefone); // '1195862597'
```

### CEP

```javascript
import { CEP } from '@yagolopes/masks/br';
// ou const { CEP } = require('@yagolopes/masks/br');

// Add mask
const cep = CEP.mask('06985596');
console.log(cep); // '06985-596'

// Clean mask
const cep = CEP.clean('06985-596');
console.log(cep); // '06985596'
```

### Número

```javascript
import { NUMERO } from '@yagolopes/masks/br';
// ou const { NUMERO } = require('@yagolopes/masks/br');

// Add mask
const numero = NUMERO.mask(123456.789);
console.log(numero); // '123.456,789'

// Clean mask
const numero = NUMERO.clean('123.456,789');
console.log(numero); // 123456.789
```

### Porcentagem

```javascript
import { PORCENTAGEM } from '@yagolopes/masks/br';
// ou const { PORCENTAGEM } = require('@yagolopes/masks/br');

// Add mask
const porcentagem = PORCENTAGEM.mask(26.95);
console.log(porcentagem); // '26,95%'

// Clean mask
const porcentagem = PORCENTAGEM.clean('26,95%');
console.log(porcentagem); // 26.95
```

### Dinheiro

```javascript
import { DINHEIRO } from '@yagolopes/masks/br';
// ou const { DINHEIRO } = require('@yagolopes/masks/br');

// Add mask
const dinheiro = DINHEIRO.mask(123456.78);
console.log(dinheiro); // 'R$ 123.456,78'

// Clean mask
const dinheiro = DINHEIRO.clean('R$ 123.456,78');
console.log(dinheiro); // '123456.78'
```

### Cartão

```javascript
import { CARTAO } from '@yagolopes/masks/br';
// ou const { CARTAO } = require('@yagolopes/masks/br');

// Add mask
const cartao = CARTAO.mask(1234567891234567);
console.log(cartao); // '1234 5678 9123 4567'

// Clean mask
const cartao = CARTAO.clean('1234 5678 9123 4567');
console.log(cartao); // 1234567891234567
```
