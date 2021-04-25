# @yagolopes/masks

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
import { CPF } from "@yagolopes/masks";
// ou const { CPF } = require('@yagolopes/masks');

const cpf = CPF.mask("59636985148");

console.log(cpf); // '596.369.851-48'
```

### RG

```javascript
import { RG } from "@yagolopes/masks";
// ou const { RG } = require('@yagolopes/masks');

const rg = RG.mask("698554859");

console.log(rg); // '69.855.485-9'
```

### CNPJ

```javascript
import { CNPJ } from "@yagolopes/masks";
// ou const { CNPJ } = require('@yagolopes/masks');

const cnpj = CNPJ.mask("34234234234234");

console.log(cnpj); // '34.234.234/2342-34'
```

### Celular

```javascript
import { CELULAR } from "@yagolopes/masks";
// ou const { CELULAR } = require('@yagolopes/masks');

const celular = CELULAR.mask("11958625974");

console.log(celular); // '(11) 95862-5974'
```

### Telefone

```javascript
import { TELEFONE } from "@yagolopes/masks";
// ou const { TELEFONE } = require('@yagolopes/masks');

const telefone = TELEFONE.mask("1195862597");

console.log(telefone); // '(11) 9586-2597'
```

### CEP

```javascript
import { CEP } from "@yagolopes/masks";
// ou const { CEP } = require('@yagolopes/masks');

const cep = CEP.mask("06985596");

console.log(cep); // '06985-596'
```

### Número

```javascript
import { NUMERO } from "@yagolopes/masks";
// ou const { NUMERO } = require('@yagolopes/masks');

const numero = NUMERO.mask(123456.789);

console.log(numero); // '123.456,789'
```

### Porcentagem

```javascript
import { PORCENTAGEM } from "@yagolopes/masks";
// ou const { PORCENTAGEM } = require('@yagolopes/masks');

const porcentagem = PORCENTAGEM.mask(26.95);

console.log(porcentagem); // '26,95%'
```

### Dinheiro

```javascript
import { DINHEIRO } from "@yagolopes/masks";
// ou const { DINHEIRO } = require('@yagolopes/masks');

const dinheiro = DINHEIRO.mask(123456.78);

console.log(dinheiro); // 'R$ 123.456,78'
```

### Cartão

```javascript
import { CARTAO } from "@yagolopes/masks";
// ou const { CARTAO } = require('@yagolopes/masks');

const cartao = CARTAO.mask(1234567891234567);

console.log(cartao); // '1234 5678 9123 4567'
```
