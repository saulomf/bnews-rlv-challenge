import Link from "next/link";
import styles from "./sidebar.module.css";

type SidebarProps = {
  opened: boolean;
  setClose: () => void;
};

export default function Sidebar({ opened, setClose }: SidebarProps) {
  const MenuItem = ({
    name,
    routeName,
  }: {
    name: string;
    routeName: string;
  }) => (
    <Link href={routeName} className={styles.link}>
      <h1 className={styles.linkText}>{name}</h1>
    </Link>
  );
  return (
    <>
      {opened ? (
        <div className={styles.container}>
          <div className={styles.menuContainer}>
            <h1 className={styles.menu}>Menu</h1>
            <MenuItem name="Esportes" routeName="" />
            <MenuItem name="Política" routeName="" />
            <MenuItem name="Mundo" routeName="" />
          </div>
          <div className={styles.transparency} onClick={setClose} />
        </div>
      ) : null}
    </>
  );
}
