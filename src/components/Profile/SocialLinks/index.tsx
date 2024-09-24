import style from "../Profile.module.scss";

export const SocialLinks = () => {
  return (
    <div className={style.socialLinks}>
      <a className={style.tag}>
        <i className="pi pi-github"></i>
      </a>
      <a className={style.tag}>
        <i className="pi pi-instagram"></i>
      </a>
      <a className={style.tag}>
        <i className="pi pi-linkedin"></i>
      </a>
      <a className={style.tag}>
        <i className="pi pi-youtube"></i>
      </a>
    </div>
  );
};
