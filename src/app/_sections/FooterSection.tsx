import styles from "@/styles/sections/FooterSection.module.css";
import NextjsIcon from "@/svgs/nextdotjs-color.svg";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4 className={styles.title}>Used Libraries</h4>
        <div className={styles.libraryBox}>
          <Link href="https://www.framer.com/motion/" target="_blank">
            <span>Framer-motion</span>
          </Link>
          <Link href="https://react-slick.neostack.com/" target="_blank">
            <span>React-Slick</span>
          </Link>
          <Link href="https://www.npmjs.com/package/next-themes" target="_blank">
            <span>Next-Theme</span>
          </Link>
          <Link href="https://mui.com/" target="_blank">
            <span>Matrial-UI</span>
          </Link>
        </div>
      </div>
      <div>
        <h4 className={styles.title}>Used Skill</h4>
        <div className={styles.skillBox}>
          <Link href="https://nextjs.org/">
            <NextjsIcon width="36" height="36" fill="#ffffff" />
          </Link>
        </div>
      </div>
      <div>
        <h4 className={styles.title}>Follow Us</h4>
        <div className={styles.followBox}>
          <Link href="https://www.instagram.com/ehdrjs4502/" target="_blank">
            <InstagramIcon />
          </Link>
          <Link href="https://github.com/ehdrjs4502" target="_blank">
            <GitHubIcon />
          </Link>
          <Link href="mailto:ehdrjs4502@gmail.com">
            <EmailIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
