# mlabs-test

## Decisões Técnicas
A escolha do Vue foi feita pela familiaridade com o framework.
No CSS, foi usado Sass e variáveis nativas
Quanto à construção de componentes, dentro do possível, foi aplicada a teoria do Atomic Design 
Nas requisições, foi usado fetch, função nativa, uma vez que seriam apenas a arquivos .json

## Dificuldades
- Implementação da dropzone (incompleta) - leitura do arquivo e atualização na store
- Construção do componente MlMediaIcon
- Descobrir que requisições a arquivos json devem ficar na pasta public

## Melhorias
- Utilização de axios para as requisições
- A aplicação estar bem embasada em performance web seguindo as boas práticas de https://web.dev/vitals/ um bom ranking no teste pode ser algo a mais: https://web.dev/measure/
(Diferencial) - Acessibilidade: seguir as boas práticas
- Atender os demais requisitos exigidos para os outro níveis
- Implementar test e2e
- Finalizar testes unitários
- Os ícones usados no componente de preview exigem a versão pro do font-awesome

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
