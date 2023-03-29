import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./VirtualCard.module.css";
import api from "../../utils/api";

function VirtualCard() {
  const { path } = useParams();
  const [userName, setUserName] = useState("");
  const [userUrlGit, setUserUrlGit] = useState("");
  const [userUrlLinkedin, setUserUrlLinkedin] = useState("");

  const openInNewTab = (url:string) => {
    window.open(url, "_target", "noreferrer");
  };

  useEffect(() => {
    api.get(`/${path}`).then((response) => {
      setUserName(response.data[0].name);
      setUserUrlGit(response.data[0].urlGithub);
      setUserUrlLinkedin(response.data[0].urlLinkedin);
    });
  });

  return (
    <div className={styles.virtualcard}>
      <p>Hello, my name is {userName}</p>
      <div className={styles.aboutme}>
        <span>
          Learn more about me by clicking on the links below. Contact now.
        </span>
      </div>
      <div className={styles.button}>
        <button role="link" onClick={() => openInNewTab(userUrlGit)}>
          Github
        </button>
        <button role="link" onClick={() => openInNewTab(userUrlLinkedin)}>
          Linkedin
        </button>
      </div>
    </div>
  );
}

export default VirtualCard;