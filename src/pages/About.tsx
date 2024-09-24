import { AboutBox } from "../components/AboutBox";
import { PageTitle } from "../components/PageTitle";
import style from "./About.module.scss";

export const About = () => {
  return (
    <div>
      <PageTitle text="Hakkımda" />
      <p>
        Web Tasarım ve Programlama bölümünden mezun oldum ve kendimi bu alanda
        geliştirmek ve çalıştığım şirkete elimden gelen iyi katkıları sağlamak
        istiyorum.
      </p>
      <PageTitle text="Neler Yapabilirim?" />
      <div className={style.aboutBoxContainer}>
        <AboutBox
          color="#fff4f4"
          title="UI / UX Tasarım"
          description="Gerçek hayat sorunlarına karşılık olarak ilham verici ve kullanıcı dostu çözümler tasarlayabilirim."
          iconClassName="pi pi-palette"
          iconColor="#d566ff"
        />
        <AboutBox
          color="#eef5fa"
          title="Yazılım Geliştirme"
          description="Bir çok sektör içerisinde bilimum sorunlara çözümler üretebilirim."
          iconClassName="pi pi-code"
          iconColor="#ff6080"
        />
        <AboutBox
          color="#eef5fa"
          title="E-Ticaret ve Pazarlama"
          description="Bir çok ürün yelpazesinde, sanal dünyadaki tüm rakipler ile rekabet edebilirim."
          iconClassName="pi pi-shopping-cart"
          iconColor="#ff6080"
        />
        <AboutBox
          color="#fff4f4"
          title="Stok Yöneticisi"
          description="Parekende ve satış sektöründe stok takibi ve yönetiminin üstesinden gelebilirim."
          iconClassName="pi pi-warehouse"
          iconColor="#269fff"
        />
      </div>
    </div>
  );
};
