<p align="center">
<img src="../.github/qrcodegenerator.png"/>
</p>

## 💻 About

Project developed for the Backend Developer test of the company **[Buzzvel](https://buzzvel.com)**. The objective of the application is to create a QR Code generator, where the user would register their Name, Github Link and Linkedin Link, creating a virtual card through the generated QR Code, leading to a URL containing the registered information. The creation and visualization of virtual cards should be done through an API.

---

## 🚀 Technologies 

The project was developed with the following technologies:

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

## ⚙️ How to use!

Follow the steps below to be able to use the application on your machine.

1. Install Docker Desktop by [clicking here](https://www.docker.com/products/docker-desktop/)


2.  Clone the application on your local machine with the following commands:

```
git clone https://github.com/danvieira97/qrcode-generator.git
```

3. Then, go to your project directory using the command

```bash
cd qrcode-generator
```

4. Initialize the project containers by `docker compose up -d`:

```bash
cd ./qrcode-front && docker compose up -d
cd ./qrcodegenerator && docker compose up -d
```

5. If you are not redirected to the browser, navigate to [localhost](http://localhost:5173)
