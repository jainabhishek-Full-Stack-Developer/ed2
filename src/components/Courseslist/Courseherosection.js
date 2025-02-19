import Link from "next/link";
import styles from "./page.module.css";

const Courseherosection = () => {
    return (
        <section className={styles.studentHeroSection}>
            <div className={styles.studentHeroContent}>
                <h1 className={styles.studentHeroTitle}>Learn from the Best, Anytime, Anywhere</h1>
                <p className={styles.studentHeroText}>Access high-quality courses and start your learning journey today.</p>
                <div className={styles.studentHeroButtons}>
                    <Link href="/sign-in" className={styles.studentSignupHeroBtn}>Get Started</Link>
                </div>
            </div>
            <div className={styles.studentHeroImageWrapper}>
                <img
                    src="/images/hero.png"
                    alt="Online Learning Illustration"
                    className={styles.studentHeroImage}
                />
            </div>
        </section>
    )
}

export default Courseherosection
