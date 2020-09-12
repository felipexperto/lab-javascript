# importar-script

> Uma rápida maneira de resolver problemas com carregamentos de javascripts blocantes.

## Intro

Você já teve o Google Page Speed Test no seu pé? Indicando vários arquivos blocantes de javascript para um trecho de código ou biblioteca que você só iria utilizar ao clique de um botão ou carregamento assíncrono de conteúdo?

**Pois é...** Cansado desse problema fui procurar soluções para os meros mortais que não estão lidando com SPAs(Single Page Applications) e podendo gerar bundles específicos para cada página minimizando requisições e tempo de carregamento.

Fora o problema de bloquear a thread e apesar do carregamento da página acontecer (até que rápido) o usuário não poder interagir com os elementos.

## Solução

**Pensa comigo:** Você precisa carregar uma library, controlar quando ela será carregada e provavelmente executar um código após seu carregamento completo.
Então a solução envolve: Uma função de carregamento de script, um setTimeout e uma função de callback.

- A função `importarScript` está sendo chamada em `assets/js/app/index.js`, com seus argumentos preenchidos: `src`, `timeout` e `callbackfunction`;
- O script que será importado está em `assets/js/lib/platform.js` e foi [retirado daqui](https://github.com/bestiejs/platform.js/);
- A mágica está no `assets/js/app/core.js`;
 - É uma prática comum ter um arquivo que é linkado em todas as páginas e possui algumas funções básicas, esse é o nosso `core.js`;
 - O `index.js` é um arquivo que pertence a própria página e ali você inseriria todas funções pertinentes a página;
- Os arquivos CSS não influenciam no exemplo.
