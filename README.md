<p align="center">
  <img src="./ide-site/public/imagens/logo-ide-roxo.png" alt="Novo Site da IDE" width="200">
</p>

<h1 align="center">Novo Site da IDE</h1>

## Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js e npm
- Docker Desktop (ou Docker Engine com o plugin Docker Compose)

### Banco de dados com Docker

O Docker Compose inicia o PostgreSQL usado pelo Payload CMS. A aplicação Next.js é executada localmente, fora do Docker.

1. Na raiz do repositório, acesse a pasta da aplicação:

    ```bash
    cd ide-site
    ```

2. Inicie o banco de dados:

    ```bash
    docker compose up -d db
    ```

    O serviço fica disponível em `localhost:5433`. Para conferir se está ativo, use `docker compose ps`; para acompanhar os logs, use `docker compose logs -f db`.

3. Instale as dependências e configure o ambiente:

    ```bash
    npm install
    cp .env.example .env.local
    ```

    No Windows PowerShell, use `Copy-Item .env.example .env.local` no lugar do comando `cp`. No arquivo `.env.local`, configure a conexão com o banco iniciado pelo Compose:

    ```dotenv
    DATABASE_URI=postgres://payload:payload@localhost:5433/payload
    PAYLOAD_SECRET=defina-um-valor-secreto-aleatorio
    ```

    Preencha também as demais variáveis de ambiente necessárias para os recursos que for utilizar, como e-mail e autenticação Google.

4. Inicie a aplicação:

    ```bash
    npm run dev
    ```

    Acesse [http://localhost:3000](http://localhost:3000).

Para parar o banco sem remover os dados, execute `docker compose stop db`. Para parar e remover o container, mantendo os dados persistidos, execute `docker compose down`. **Não use `docker compose down -v` se quiser preservar os dados do banco**, pois essa opção remove também o volume `payload-db`.

### Executar sem Docker

Se já houver um PostgreSQL disponível, configure `DATABASE_URI` em `.env.local` para apontar para ele e siga os passos de instalação das dependências e inicialização da aplicação acima.

## Como publicar um post no blog

O blog da IDE é gerenciado pelo painel administrativo do Payload CMS.

1. Inicie o projeto localmente conforme os passos acima.
2. Acesse o painel administrativo em `http://localhost:3000/admin`.
3. Se ainda não houver um usuário administrador cadastrado, crie o primeiro usuário no primeiro acesso.
4. No menu lateral, vá em `Posts` e clique em `Create New` para criar um novo artigo.
5. Preencha os campos do post:
   - `title`: título do artigo
   - `slug`: identificador da URL do post; se deixar em branco, o sistema tenta gerar automaticamente a partir do título
   - `excerpt`: resumo curto usado na listagem e no SEO
   - `coverImage`: imagem de capa do post (obrigatória)
   - `content`: conteúdo do artigo em editor rich text
   - `author`: autor do post
   - `categories`: categorias, se houver
   - `status`: `draft` para rascunho ou `published` para publicar
   - `publishedAt`: data de publicação; se o status for `published` e esse campo estiver vazio, a data atual é preenchida automaticamente
6. Depois de preencher tudo, clique em `Save`.
7. Para que o artigo apareça no site público, deixe o status como `published`.
8. O blog fica disponível em `http://localhost:3000/Blog` e cada artigo em `http://localhost:3000/Blog/<slug>`.

Dica: antes de criar os posts, você pode criar as `Categories` e fazer upload de imagens em `Media`, para reutilizar em vários artigos.
