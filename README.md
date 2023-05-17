<h1 align="center">Antes de qualquer coisa, para rodar localmente: </h1>

```bash
git clone https://github.com/YoYolops/inb-tech-challenge && 
cd inb-tech-challenge &&
mv .env.example .env &&
npm i && npm start
```
As variáveis de ambiemte já vão ficar prontinhas. <br>
Mas pra deixar anotado, só tem uma:
```.env
REACT_APP_API_BASE_URL=https://pokeapi.co/api/v2/pokemon
```


<h3 align="left">Rodando os testes: </h3>

```bash
npm test
```

## O que fiz:
Optei por usar o mínimo de bibliotecas possíveis. <br> 
Manter a simplicidade e tentar fazer bem feito era a ideia. <br>
<strong>Front-end construído com React, CSS puro para estilizar</strong> e fim, todo o restante são ferramentas React, exceto pelos testes.

<h1 align="center">Estrutura do projeto: </h1>

- components: Unidades do sistema, componentes que leem dados e decidem como os exibir.
- core: Funcionalidades gerais do sistema, é onde ficam as funções que coletam dados e operam sobre eles.
    - contexts: Fonte de dados para exibição e funções para sua manipulação;
    - services: Funções de interação com apis;
    - helpers.ts -> funções puras utilitárias do sistema;
    - types.d.ts -> fonte de types e interfaces da aplicação;
- pages: Responsáveis por agregar components na formação de uma página roteada da aplicação
- test: Arquivos de teste e seus auxiliares
