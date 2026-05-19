import { TimerIcon } from "lucide-react";
import styles from "./Styles.module.css";
export function Logo() {
  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        <TimerIcon size="64px" />
        <span>Chronos</span>
      </a>
    </div>
  );
}
