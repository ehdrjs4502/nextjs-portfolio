import styles from "@/app/_styles/components/SkillBox.module.css";

export default function SkillBox({ icons }: any) {
  return (
    <div className={styles.box}>
      {icons.map((icon: any, index: number) => (
        <div key={index} className={styles.icon}>
          {icon}
        </div>
      ))}
    </div>
  );
}
