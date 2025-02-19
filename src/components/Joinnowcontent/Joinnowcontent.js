import styles from "./page.module.css";
import Link from "next/link";

const Joinnowcontent = () => {
    return (
        <section>
            <div className={styles.joinSection}>
                <div className={styles.joinContent}>
                    <h2 className={styles.joinTitle}>Join CourseHive Today!</h2>
                    <p className={styles.joinDescription}>
                        Ready to take the next step in your learning journey? Start your first course today and gain skills that will shape your future!
                    </p>
                    <Link href="/courses" className={styles.joinCTA}>Start Learning Now</Link>
                </div>
            </div>
        </section>
    )
}

export default Joinnowcontent;
