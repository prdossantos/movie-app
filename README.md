# Movie APP

Webapp integrando os filmes de themoviedb.org

## Recursos utilizados

1.  ReactJS ( com create-ract-app )
2.  Styledcomponents
3.  ContextAPI
3.  Test ( Jest com @testing-library/react )
5.  React Query ( com axios )
6.  Doc ( com storybook )

## Como usar localmente

1.  Clone este repositório e execute o comando: `yarn install`.
2.  Execute o comando: `yarn start`.
3.  O arquivo `.env` contém as chaves para conexão com a API, este arquivo foi enviado para o repo, para facilitar os testes.
4.  Por padrão irá iniciar em <http://localhost:3000>.

## Estrutura de pastas

O projeto segue a seguinte estrutura.

```js
src/
  - components    # Contém os componentes globais do app
  - pages         # Contém as páginas de acesso
  - contexts      # Contém os contextos aplicados
  - services      # Contém as chamadas de API
  - stories       # Contém a documentação com storybook, neste projeto foi feita a doc apenas dos componentes, mas é interessante efetuar a doc de todo sistema
```

## Estrutura de um componente

```js
src/
  - Component.props.js          # Deve receber os tipos e valores padrões do componente
  - Component.style.js          # Tem o estilo do componente
  - Component.test.js           # Teste unitário
  - index.js                    # Html e lógica aplicda ao componente
```


### Libs
-   [React Query](https://react-query.tanstack.com/)
    -   [Axios](https://github.com/axios/axios)
-   [React Router](https://reactrouter.com/web/guides/quick-start)
-   [ClassNames](https://github.com/JedWatson/classnames)
-   [PropTypes](https://github.com/facebook/prop-types)
-   [Styledcomponents](https://styled-components.com/)

\*Os `components` forão criados para serem independentes( sem lógica de negócio ), assim podem ser reaproveitados.
Desta forma toda lógica fica contida nas páginas, assim, temos componentes com teste unitário e as páginas com testes de integração( **não foram aplicados neste projeto** ).

## Documentação

1.  Foi feita a documentação dos componentes.
2.  Execute o comando: `yarn run storybook` para visualizar.
3.  Por padrão irá iniciar em <http://localhost:6006>.


## Como rodar os testes

Para rodar os testes utilize o camando abaixo:

Isso irá rodar todos os testes
`yarn test --collect-coverage`

Também será gerado um relatório de cobertura de código na pasta `./coverage`.
Você pode visualizar no navegador acessessando `./coverage/lcov-report/index.html`
