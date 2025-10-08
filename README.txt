💻 Sistema de Gestão de Jogadores(as)
Visão Geral
Este é um sistema web robusto focado na gestão e visualização de dados de jogadores e jogadoras. A arquitetura é baseada no Next.js para o Front-end e no Prisma como ORM, garantindo uma aplicação moderna e segura.

O projeto estabelece dois níveis de acesso distintos: um Painel de Administração completo (CRUD) e uma Área de Visualização para usuários comuns ou público.

🚀 Tecnologias Essenciais
Esta seção detalha o stack tecnológico utilizado no desenvolvimento:

Frontend
Next.js: Framework React para renderização Server-Side Rendering (SSR) e Static Site Generation (SSG).

React: Biblioteca JavaScript para construção da interface.

TypeScript: Linguagem para tipagem estática, aumentando a segurança e a manutenibilidade do código.

Estilização: Frameworks como Tailwind CSS ou Material UI são recomendados para agilizar o design.

Backend & Banco de Dados
Prisma: ORM (Object-Relational Mapper) usado para interagir com o banco de dados de forma segura e tipada.

Next.js API Routes: Usado para criar os endpoints RESTful da API.

Banco de Dados: PostgreSQL é a escolha ideal, mas MySQL ou SQLite (para desenvolvimento) também são compatíveis com o Prisma.

Autenticação & Autorização
NextAuth.js (ou Auth.js): Biblioteca padrão para gerenciar o processo de autenticação (login/logout).

Bcrypt: Utilizado para hashing seguro das senhas de usuário.

🔒 Níveis de Acesso e Permissões
A segurança é gerenciada por papéis (roles), definidos na tabela de usuários:

Papel	Permissões no Backend	Funcionalidades no Front-end
Admin	Acesso total (CRUD: Criar, Ler, Atualizar, Apagar) a jogadores(as) e usuários.	Painel de Administração Completo com tabelas editáveis.
Usuário Comum	Acesso apenas de leitura aos dados de jogadores(as).	Páginas de Visualização e formulário de Cadastro de Novo Usuário.

Exportar para Sheets
🛠️ Configuração e Instalação Local
Siga estes passos para configurar e rodar o projeto em seu ambiente:

Pré-requisitos
Node.js (versão 18+ ou superior)

NPM ou Yarn

Uma instância do seu Banco de Dados (ex: PostgreSQL) rodando.

1. Clonar o Repositório
Bash

git clone [URL_DO_SEU_REPOSITORIO]
cd nome-do-projeto
2. Instalar Dependências
Bash

npm install
# ou
yarn install
3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e preencha com as informações do seu ambiente:

Fragmento do código

# URL de conexão com o Banco de Dados
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORT/NOME_DO_BANCO"

# Chave secreta para a segurança da sessão (MUITO IMPORTANTE!)
NEXTAUTH_SECRET="uma_chave_secreta_longa_e_aleatoria"
4. Rodar Migrações do Prisma
Aplique o schema do Prisma no banco de dados e gere o cliente ORM:

Bash

# Aplica o schema.prisma no banco de dados, criando as tabelas
npx prisma migrate dev --name initial_setup

# Gera o Prisma Client para uso no código
npx prisma generate
5. Executar o Projeto
Bash

npm run dev
# ou
yarn dev
O sistema estará acessível em http://localhost:3000.

📄 Estrutura de Pastas
A estrutura segue as convenções do Next.js e facilita a separação de responsabilidades (Front-end, Back-end e Banco de Dados):

/
├── prisma/               # Schema e histórico de migrações do Banco de Dados
│   └── schema.prisma
├── pages/                # Rotas da Aplicação
│   ├── api/              # Endpoints da API (Lógica do Backend)
│   │   ├── auth/         # Rotas de Autenticação
│   │   └── players.ts    # CRUD de Jogadores
│   ├── admin/            # Páginas exclusivas do Admin
│   └── index.tsx         # Página Inicial
├── components/           # Componentes React reutilizáveis (UI)
├── lib/                  # Utilitários, funções de conexão e middlewares
└── types/                # Definições de tipos (TypeScript)