# Multi-Step Form with React Hook Form

Este projeto é uma implementação de um formulário multi-etapas utilizando o React, o [React Hook Form](https://react-hook-form.com/) e o [Tailwind CSS](https://tailwindcss.com/). Ele foi desenvolvido para coletar dados de usuários de maneira organizada, dividindo o formulário em etapas distintas para melhorar a experiência do usuário.

## 📋 Descrição

O objetivo deste projeto é criar um formulário de cadastro que consiste em várias etapas, onde o usuário preenche informações pessoais, informações adicionais e, por fim, faz a confirmação de seus dados. 

- **Primeira Etapa:** Coleta informações pessoais, como nome, email e telefone.
- **Segunda Etapa:** Solicita dados adicionais como idade, endereço e cidade.
- **Terceira Etapa:** Solicita a confirmação dos dados preenchidos, incluindo a aceitação dos termos e condições e um campo para observações adicionais.

O formulário é validado utilizando a biblioteca [Zod](https://zod.dev/), garantindo que os dados inseridos pelo usuário sejam válidos em cada etapa.

## ⚡ Funcionalidades

- **Formulário Multi-Etapas:** O formulário é dividido em três etapas, com navegação entre elas.
- **Validação de Dados:** Utiliza o [React Hook Form](https://react-hook-form.com/) para gerenciar o estado do formulário e a [Zod](https://zod.dev/) para validar os dados de entrada.
- **Feedback Visual:** Erros de validação são exibidos diretamente abaixo de cada campo, proporcionando um feedback claro e rápido.
- **Design Responsivo:** Utiliza o [Tailwind CSS](https://tailwindcss.com/) para garantir que o formulário seja responsivo e funcione bem em dispositivos móveis e desktops.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces de usuário.
- **React Hook Form** - Biblioteca para gerenciar formulários de maneira eficiente e com validação.
- **Zod** - Biblioteca para validação de dados.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **Next.js** - Framework React para criação de sites e aplicativos full-stack.

## 🛠️ Instalação

Siga as instruções abaixo para configurar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) como gerenciador de pacotes.

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/leandrosuy2/multi-step-form.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd multi-step-form
   ```

3. Instale as dependências:

   Se você estiver usando o npm:

   ```bash
   npm install
   ```

   Ou, se estiver usando o yarn:

   ```bash
   yarn install
   ```

4. Execute o servidor de desenvolvimento:

   Se estiver usando o npm:

   ```bash
   npm run dev
   ```

   Ou, se estiver usando o yarn:

   ```bash
   yarn dev
   ```

5. Abra seu navegador e acesse o projeto em:

   ```
   http://localhost:3000
   ```

## 💡 Como Funciona

### 1. Estrutura do Projeto

- **`/components`**: Contém todos os componentes do formulário (cada etapa).
- **`page.tsx`**: Página principal onde o formulário multi-etapas é renderizado.
- **`globals.css`**: Arquivo CSS global para estilizações básicas (geralmente, o Tailwind CSS é configurado aqui).

### 2. Funcionamento do Formulário

O formulário é dividido em três etapas:

1. **Etapa 1: Informações Pessoais**
   - Campos: Nome, Email, Telefone.
   
2. **Etapa 2: Informações Adicionais**
   - Campos: Idade, Endereço, Cidade.
   
3. **Etapa 3: Confirmação e Observações**
   - Campos: Aceitação dos termos e condições e Observações.

Em cada etapa, o estado do formulário é gerido pelo React Hook Form, e a validação é realizada com Zod.

### 3. Validação

A validação de dados é feita com Zod. Cada campo possui validações definidas, como a obrigatoriedade de preenchimento e formatação correta.

Exemplo de validação de um campo de email:

```javascript
email: z.string().email("Por favor, insira um email válido").nonempty("O email é obrigatório."),
```

Se a validação falhar, uma mensagem de erro é exibida abaixo do campo correspondente.

### 4. Navegação entre Etapas

O formulário permite que o usuário avance para a próxima etapa, mas a validação de cada etapa deve ser bem-sucedida para permitir que ele continue.

## 📱 Visão Mobile

O formulário foi projetado para ser totalmente responsivo. Em dispositivos móveis, ele ajusta automaticamente seu layout para garantir uma boa experiência de preenchimento.

## 🚧 Melhorias Futuras

- **Implementar Armazenamento Local:** Armazenar os dados em localStorage ou sessionStorage para permitir que o usuário retorne e continue o preenchimento do formulário.
- **Integração com APIs:** Integrar o formulário com uma API para enviar os dados preenchidos.
- **Aprimoramento na UX/UI:** Adicionar animações entre as etapas para uma transição mais suave.

## 🤝 Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Add new feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.