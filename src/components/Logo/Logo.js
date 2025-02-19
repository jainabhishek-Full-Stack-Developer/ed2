import styles from "./page.module.css";
import Link from "next/link";

const Logo = () => {

    return (
        <div className={styles.logo}>
            <Link href="/" aria-label="CourseHive Home">
                <span>CourseHive</span>
            </Link>
        </div>

    )
}

export default Logo;
