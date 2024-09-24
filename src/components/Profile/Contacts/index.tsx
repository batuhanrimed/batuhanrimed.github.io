import clsx from "clsx";
import style from "../Profile.module.scss";

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.contact}>
        <div className={clsx(style.icon, style.phone)}>
          <i className="pi pi-mobile"></i>
        </div>
        <div>
          <small>Telefon</small>
          <a target="_blank" href="tel:+905541559486">
            +90 (554) 155 9486
          </a>
        </div>
      </div>
      <div className={style.contact}>
        <div className={clsx(style.icon, style.email)}>
          <i className="pi pi-inbox"></i>
        </div>
        <div>
          <small>E-mail</small>
          <a target="_blank" href="mailto:batuhanrimed@gmail.com">
            batuhanrimed@gmail.com
          </a>
        </div>
      </div>
      <div className={style.contact}>
        <div className={clsx(style.icon, style.location)}>
          <i className="pi pi-map-marker"></i>
        </div>
        <div>
          <small>İkamet</small>
          <a target="_blank" href="https://maps.app.goo.gl/LjA81SxuwF5FthxFA">
            Sancaktepe, İstanbul, Turkiye
          </a>
        </div>
      </div>
    </div>
  );
};
