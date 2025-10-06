# ⚡ Syncro

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://syncro-teal.vercel.app)

---

## 🧭 Sobre o projeto

O **Syncro** é uma aplicação **Fullstack** desenvolvida como **projeto final do curso “Desenvolvedor Fullstack”** realizado pelo **SENAI** em parceria com a **Energisa**, dentro do programa de inovação **Rio Pomba Valley (MG)**.

O sistema foi criado com foco em **organização, produtividade e integração de tecnologias modernas**, aplicando na prática os conceitos aprendidos durante o curso — desde o desenvolvimento do front-end com **Next.js + React**, até o back-end estruturado com Prisma ORM e banco de dados MongoDB Cloud (Atlas).

---

## 🎯 Objetivo

O projeto teve como propósito:

- Consolidar os conhecimentos técnicos adquiridos no curso.  
- Construir uma aplicação **modular, responsiva e escalável**.  
- Demonstrar boas práticas de arquitetura, versionamento e design de interface.  
- Aplicar o ciclo completo de desenvolvimento: **planejamento → código → testes → deploy**.  

---

## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologias |
|--------|--------------|
| **Frontend** | [Next.js (App Router)](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/) |
| **Backend** | [Node.js](https://nodejs.org/), [Prisma ORM](https://www.prisma.io/) |
| **Banco de Dados** | MongoDB Atlas (Cloud) |
| **Infra & Deploy** | [Vercel](https://vercel.com/) |
| **Outros** | ESLint, PostCSS, TypeScript, Git/GitHub |

---

## 🧩 Estrutura do Projeto

```

syncro/
├── app/                 # Páginas e rotas (App Router)
├── components/          # Componentes reutilizáveis
├── context/             # Contextos globais e providers
├── lib/                 # Funções auxiliares e conexão Prisma
├── prisma/              # Schema, migrations e seeds
├── public/              # Arquivos estáticos
├── styles/              # Estilos globais
├── tailwind.config.js   # Configuração do Tailwind CSS
├── postcss.config.js
├── next.config.js
└── package.json

````

---

## 🚀 Como Executar Localmente

### 🧰 Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- npm, yarn ou pnpm
- Banco de dados PostgreSQL configurado

### ⚡ Passos

#### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/erickdevz/syncro.git
cd syncro
````

#### 2️⃣ Instalar dependências

```bash
npm install
```

#### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```ini
DATABASE_URL="mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/syncro?retryWrites=true&w=majority"
```

#### 4️⃣ Rodar as migrações e iniciar o servidor

```bash
npx prisma migrate dev
npm run dev
```

Acesse em: 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 💻 Funcionalidades Principais

* Integração entre **frontend e backend**
* Estrutura escalável e componentizada
* Interface moderna com **Tailwind CSS**
* Conexão com banco de dados **MongoDB Cloud (Atlas)** via **Prisma ORM**
* Deploy automatizado na **Vercel**
* Padrões de **Clean Code** e **boas práticas de desenvolvimento**

---

## 📈 Aprendizados

Durante o desenvolvimento, foram aplicados conceitos fundamentais como:

* Estruturação de aplicações **Fullstack modernas**
* Modelagem de dados com **MongoDB** + **Prisma ORM**
* Criação de APIs e rotas dinâmicas
* Uso de hooks e contextos globais
* Versionamento com **Git** e integração contínua
* Deploy em ambiente de produção com **Vercel**

Este projeto reflete a **evolução técnica e prática** adquirida ao longo do curso, demonstrando o domínio de ferramentas e metodologias do desenvolvimento web moderno.

---

## 🏫 Programa e Parcerias

| Entidade             | Descrição                                                      |
| -------------------- | -------------------------------------------------------------- |
| **SENAI MG**         | Formação técnica e acompanhamento do projeto final.            |
| **Energisa**         | Empresa parceira do programa, fomentando inovação tecnológica. |
| **Rio Pomba Valley** | Ecossistema de tecnologia e inovação de Minas Gerais.          |

---

## 🧾 Licença

Este projeto está licenciado sob os termos da **MIT License**.
Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

## 👨‍💻 Autor

**Erick Xavier**
Desenvolvedor Back-End Java • Fullstack em formação
📍 Viçosa – MG
🔗 [LinkedIn](https://linkedin.com/in/erickxavierdev)
💻 [GitHub](https://github.com/erickdevz)
📫 E-mail: [erickxavier.dev@gmail.com](mailto:erickxavier.dev@gmail.com)

---

> *“A tecnologia é a ponte entre a ideia e o impacto. O Syncro representa essa travessia no meu aprendizado como desenvolvedor.”*
