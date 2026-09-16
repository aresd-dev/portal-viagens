# Portal de Viagens

Portal de destinos turísticos brasileiros desenvolvido com Next.js, App Router e TypeScript. Apresenta fotos e informações sobre Rio de Janeiro, Fernando de Noronha, Chapada Diamantina e Gramado, com uma listagem de cards e páginas de detalhes.

## Estrutura

- `app/page.tsx`: página inicial com apresentação do portal.
- `app/layout.tsx`: layout raiz da aplicação.
- `app/destinos/page.tsx`: listagem dos destinos.
- `app/destinos/page.module.css`: título e grid responsivo da listagem.
- `app/destinos/[id]/page.tsx`: detalhes do destino selecionado.
- `components/Layout.tsx`: cabeçalho, navegação, conteúdo e rodapé compartilhados.
- `components/CardDestino.tsx`: card reutilizável com imagem e nome do destino.
- `data/destinos.ts`: identificadores, nomes, descrições e caminhos das imagens.
- `public/imagens/`: imagens dos destinos.

Os estilos das páginas e dos componentes são organizados em CSS Modules, com estilos globais em `app/globals.css`.

## Rotas disponíveis

| Rota | Conteúdo |
| --- | --- |
| `/` | Apresentação do portal e acesso à listagem |
| `/destinos` | Cards dos destinos disponíveis |
| `/destinos/rio-de-janeiro` | Detalhes do Rio de Janeiro |
| `/destinos/fernando-de-noronha` | Detalhes de Fernando de Noronha |
| `/destinos/chapada-diamantina` | Detalhes da Chapada Diamantina |
| `/destinos/gramado` | Detalhes de Gramado |

As páginas de detalhes utilizam a rota dinâmica `/destinos/[id]`. Identificadores não cadastrados retornam uma página de destino não encontrado (404).

## Execução

Instale as dependências com `npm install` e inicie o servidor de desenvolvimento com `npm run dev`. Acesse [http://localhost:3000](http://localhost:3000).

- `npm run lint`: verifica o código com ESLint.
- `npm run build`: gera a versão de produção.
- `npm start`: inicia o servidor após o build.
