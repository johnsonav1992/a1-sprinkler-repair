import { useState } from "react";
import { MAIN_ROUTES } from "../../constants/routes-constants";
import styles from "./MobileSidebar.module.css";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        className={styles.sidebarToggle}
        onClick={open}
        onKeyDown={(e) => e.key === "Enter" && open()}
        tabIndex={0}
        aria-label="Open menu"
      >
        <i className="ti ti-menu-2" style={{ fontSize: 32 }}></i>
      </div>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={close}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
        <button className={styles.closeBtn} onClick={close} aria-label="Close menu">
          <i className="ti ti-x"></i>
        </button>
        <nav className={styles.nav}>
          {MAIN_ROUTES.map((route) => (
            <a key={route.path} href={route.path} className={styles.link} onClick={close}>
              {route.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
