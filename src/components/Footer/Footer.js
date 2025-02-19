import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import styles from "./page.module.css"; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.gridContainer}>
                    {/* Brand & Description */}
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.brand}>
                            CourseHive
                        </Link>
                        <p className={styles.description}>
                        CourseHive is an innovative education platform providing high-quality online courses, resources, and tools to help learners achieve their goals.
                        </p>
                        {/* Social Icons */}
                        <div className={styles.socialIcons}>
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF className={styles.icon} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className={styles.icon} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn className={styles.icon} />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className={styles.icon} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className={styles.linkColumns}>
                        <div className={styles.column}>
                            <h2 className={styles.columnTitle}>Company</h2>
                            <ul className={styles.columnList}>
                                <li><Link href="/about-us" className={styles.footerLink}>About</Link></li>
                                <li><Link href="/" className={styles.footerLink}>Careers</Link></li>
                                <li><Link href="/" className={styles.footerLink}>Brand Center</Link></li>
                                <li><Link href="/" className={styles.footerLink}>Blog</Link></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.columnTitle}>Legal</h2>
                            <ul className={styles.columnList}>
                                <li><Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link></li>
                                <li><Link href="/licensing" className={styles.footerLink}>Licensing</Link></li>
                                <li><Link href="/terms" className={styles.footerLink}>Terms</Link></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.columnTitle}>Download</h2>
                            <ul className={styles.columnList}>
                                <li><Link href="/download/ios" className={styles.footerLink}>iOS</Link></li>
                                <li><Link href="/download/android" className={styles.footerLink}>Android</Link></li>
                                <li><Link href="/download/windows" className={styles.footerLink}>Windows</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className={styles.divider} />
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} <Link href="/" className={styles.link}>CourseHive</Link>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
