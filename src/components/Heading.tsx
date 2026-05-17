import styles from "./Heading.module.css";
type HeadingProps = {
  children: React.ReactNode;
};
export function Heading({ children }: HeadingProps) {
  const classes = `${styles.heading} ${styles.cyan}`;
  return <h1 className={classes}>{children}</h1>;
}
