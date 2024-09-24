import { useEffect, useState } from "react";
import { Repository } from "../types";
import style from "./Works.module.scss";
import { PageTitle } from "../components/PageTitle";

export const Works = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/batuhanrimed/repos"
        );
        if (response) setRepos(await response.json());
      } catch (e) {
        alert("Hata!" + JSON.stringify(e));
      }
    })();
  }, []);
  return (
    <>
      <PageTitle text="Github Çalışmalarım" />
      {repos.map((repo) => (
        <a className={style.repoBox} href={repo.html_url} target="_blank">
          <h4>{repo.name}</h4>
          {repo.description && (
            <>
              <hr />
              <p>{repo.description}</p>
            </>
          )}
        </a>
      ))}
    </>
  );
};
