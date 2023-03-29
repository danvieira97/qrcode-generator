<p align="center">
<img src="./.github/qrcodegenerator.png"/>
</p>

[English](https://github.com/danvieira97/qrcode-generatorREADME-en.md)

## 💻 Sobre

Projeto realizado para o teste de desenvolvedor Backend da empresa **[Buzzvel](https://buzzvel.com)**. O objetivo da aplicação é criar um gerador de QR Code, onde o usuário cadastraria seu Nome, Link do Github e Link do Linkedin, deste modo seria criado um cartão virtual através do QR Code gerado, levando para um URL contendo as informações cadastradas. A criação e visualização dos cartões virtuais deveriam ser feitos através de uma API.

---

## 🚀 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

#### **Backend**

- **[Node.js](https://nodejs.org/en)**
- **[Nest.js](https://docs.nestjs.com)**
- **[MongoDB](https://www.mongodb.com/docs)**
- **[Docker](https://docs.docker.com)**

#### **Frontend**

- **[React.js](https://react.dev)**
- **[Axios](https://axios-http.com)**
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**

---

## ⚙️ Como utilizar!

Siga os seguintes passos para poder utilizar a aplicação em sua máquina.

1. Instale o Docker Desktop [clicando aqui](https://www.docker.com/products/docker-desktop/)


2.  Clone a aplicação em sua máquina local com os seguintes comandos:

```
git clone https://github.com/danvieira97/qrcode-generator.git
```

3. Depois, vá até o diretório do seu projeto utilizando o comando

```bash
cd qrcode-generator
```

4. Inicialize os containers do projeto via `docker compose up -d`:

```bash
cd ./qrcode-front && docker compose up -d
cd ./qrcodegenerator && docker compose up -d
```

5. Caso você não seja redirecionado ao browser, navegue até [conexão local](http://localhost:5173)
