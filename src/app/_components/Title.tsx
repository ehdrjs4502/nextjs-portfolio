import styles from "@/app/_styles/components/Title.module.css";

interface TitleProps {
  title: string;
  subTitle: string;
}

export default function Title({ title, subTitle }: TitleProps) {
  return (
    <>
      <div className={styles.box}>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
      </div>
    </>
  );
}
