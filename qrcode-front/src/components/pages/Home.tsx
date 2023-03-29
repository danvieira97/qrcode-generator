import styles from "./Home.module.css";
import api from '../../utils/api'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState(""); 
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const navigate = useNavigate();

  async function createQrCode(qrcode: any) {
    await api.post("/generate", qrcode).then();
  }

  const submit = (e: any) => {
    e.preventDefault();
    if(name === "" || github === "" || linkedin === "") {
      alert("Please enter all inputs")
      return
    }
    const path = name.split(" ").join("").toLowerCase();
    const qrCode = {
      name: name,
      urlGithub: github,
      urlLinkedin: linkedin,
      path: path,
    };
    createQrCode(qrCode);
    navigate("/generate", {
      state: {
        name: name,
        path: path,
      },
    });
  };

  return (
    <div className={styles.container}>
      <span>QR Code Image Generator</span>
      <form onSubmit={submit} className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="github" className={styles.label}>
            Github URL
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your Github URL"
            name="github"
            id="github"
            onChange={(e) => setGithub(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="linkedin" className={styles.label}>
            Linkedin URL
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your Linkedin URL"
            name="linkedin"
            id="linkedin"
            onChange={(e) => setLinkedin(e.target.value)}
          ></input>
        </div>
        <button className={styles.button} type="submit">
          Generate Image
        </button>
      </form>
    </div>
  );
}

export default Home;