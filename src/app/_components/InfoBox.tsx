"use client";
import Link from "next/link";
import ImgBox from "../_components/ImgBox";
import { motion } from "framer-motion";
import styles from "@/app/_styles/components/InfoBox.module.css";

export default function InfoBox() {
  return (
    <div className={styles.infoBox}>
      <ImgBox />
      <div className={styles.info}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <span>Name</span>
          <strong>김동건</strong>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <span>Phone</span>
          <strong>010-9243-4502</strong>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <span>Mail</span>
          <strong>ehdrjs4502@gmail.com</strong>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <span>Github</span>
          <strong>
            <Link href="https://github.com/ehdrjs4502" target="_blank">
              github.com/ehdrjs4502
            </Link>
          </strong>
        </motion.div>
      </div>
    </div>
  );
}
