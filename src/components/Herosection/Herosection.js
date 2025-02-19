import Link from "next/link";
import styles from "./page.module.css";

const HeroSection = () => {
    return (
        <>
            <section className={styles.heroSection}>
                {/* Background Video */}
                <video autoPlay loop muted className={styles.heroVideo}>
                    <source src="/hero-section.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay to make text readable */}
                <div className={styles.heroOverlay}></div>
                {/* Content */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Learn from the Best, Anytime, Anywhere</h1>
                    <p className={styles.heroText}>
                        Access high-quality courses and start your learning journey today.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/courses" className={styles.exploreBtn}>
                            Explore Courses
                        </Link>
                        <Link href="/sign-in" className={styles.signupBtn}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
          
        </>

    );
};

export default HeroSection;
