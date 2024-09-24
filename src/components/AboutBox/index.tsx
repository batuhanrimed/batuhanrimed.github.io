import style from "./AboutBox.module.scss";

type AboutBoxProps = {
  color: string;
  iconClassName: string;
  iconColor: string;
  title: string;
  description: string;
};

export const AboutBox = ({
  color,
  iconClassName,
  iconColor,
  title,
  description,
}: AboutBoxProps) => {
  return (
    <div
      className={style.aboutBox}
      style={{
        backgroundColor: color,
      }}
    >
      <i
        className={iconClassName}
        style={{
          color: iconColor,
        }}
      ></i>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
