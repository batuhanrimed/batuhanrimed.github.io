import style from "./PageTitle.module.scss";

type PageTitleProps = {
  text: string;
};

export const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <h2 className={style.pageTitle}>
      <strong>{text}</strong>
      <div className={style.line} />
    </h2>
  );
};
