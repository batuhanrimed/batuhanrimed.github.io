import { Contacts } from "./Contacts";
import style from "./Profile.module.scss";
import { SocialLinks } from "./SocialLinks";
import Resume from "../../assets/resume.pdf";
import { useCallback } from "react";

export const Profile = () => {
  const onDownloadResume = useCallback(() => {
    const currentDate = new Date();
    fetch(Resume)
      .then((resp) =>
        resp.status === 200
          ? resp.blob()
          : Promise.reject("something went wrong")
      )
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Batuhan Demir ${currentDate.toJSON()}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }, []);

  return (
    <div className={style.profile}>
      <div className={style.card}>
        <div className={style.profileInfo}>
          <div className={style.photo}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEDopa3XGV6qw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718993035374?e=2147483647&v=beta&t=_0EvIOEUHqdKUNqXt7GKSbTyrIj9pgxkb6LCp2UBDw4"
              alt="Batuhan Demir"
            />
          </div>
          <h1>Batuhan DEMİR</h1>
          <span className={style.tag}>Software Developer</span>
          <SocialLinks />
          <Contacts />
        </div>

        <button
          type="button"
          className={style.downloadResume}
          onClick={onDownloadResume}
        >
          <i className="pi pi-download"></i>
          <strong>Özgeçmişimi İndir</strong>
        </button>
      </div>
    </div>
  );
};
