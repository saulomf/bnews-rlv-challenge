import { IoIosMenu } from "react-icons/io";
import styles from "./header.module.css";

type HeaderProps = {
  openSidebar: () => void;
};

export default function Header({ openSidebar }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.menuIcon} onClick={openSidebar}>
        <IoIosMenu size={48} />
        <h1
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "fantasy",
            marginLeft: 4,
          }}
        >
          BN
        </h1>
      </div>
      <h1 style={{ fontSize: 28, fontWeight: "bold", fontFamily: "serif" }}>
        BRAZILIAN NEWS
      </h1>
      <div style={{ borderRadius: 8, padding: 6, backgroundColor: "#331111" }}>
        <input
          style={{ backgroundColor: "#331111" }}
          type="text"
          placeholder="Buscar.."
        />
      </div>
    </div>
  );
}
