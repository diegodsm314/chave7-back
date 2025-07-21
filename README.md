# Gerenciador de Tarefas - Chave7 Back-end

Este repositório contém os códigos do back-end do projeto Chave7.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 18.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

```bash
git clone https://github.com/diegodsm314/chave7-back.git
cd chave7-back
npm install
# ou
yarn install
```

## Configuração

1. Copie o arquivo de variáveis de ambiente:
    ```bash
    cp .env.example .env
    ```
2. Edite o arquivo `.env` com suas configurações.

## Execução

### Ambiente de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

## Testes

```bash
npx jest
```

## Estrutura do Projeto

- `src/` — Código-fonte principal
- `src/__test__/` — Testes automatizados

## Observações
### Frontend
- Esse aplicativo funciona em conjunto ao repositorio chave7-front <https://github.com/diegodsm314/chave7-front>