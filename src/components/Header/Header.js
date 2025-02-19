"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Check if accessToken exists in sessionStorage
    const token = sessionStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("accessToken"); // Remove token
    setAccessToken(null);
    router.push("/"); // Redirect to home after logout
  };


  // Function to close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          {accessToken ? (
            <div className={styles.auth}>
              <button type="button" className={styles.loginBtn} style={{ border: "none" }} onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <ul className={styles.navList}>
                <li>
                  <Link href="/" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" passHref>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" passHref>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" passHref>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={styles.auth}>
                <Link href="/sign-in" className={styles.loginBtn} passHref>
                  Login
                </Link>
              </div>
              <div className={styles.studentPannelHeader}>
                <button type="button" onClick={() => setIsSidebarOpen(true)}>
                  <FaBars size={23} />
                </button>
              </div>
            </>
          )}
        </nav>
      </header>
      <aside
        ref={sidebarRef}
        className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.open : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <Logo />
        </div>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li><Link href="/" aria-label="Go to Home" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
            <li><Link href="/courses" aria-label="Browse Courses" onClick={() => setIsSidebarOpen(false)}>Courses</Link></li>
            <li><Link href="/about-us" aria-label="Learn About Us" onClick={() => setIsSidebarOpen(false)}>About</Link></li>
            <li><Link href="/contact-us" aria-label="Contact Us" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
          </ul>
          <div className={styles.mobileAuth}>
            <Link href="/sign-in" className={styles.loginBtn} onClick={() => setIsSidebarOpen(false)}>Login</Link>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;
