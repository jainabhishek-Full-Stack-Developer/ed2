import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper";
import styles from "./page.module.css";

const Privacypolicyhome = () => {
    return (
        <Mainstudentwrapper>
              <div className={styles.container}>
                <div>
                    <h1 className={styles.privacyPolicyHeading}>Privacy Policy</h1>                    
                </div>
                <div>
                    <section className={styles.section}>
                        <h2 className={styles.heading}>1. Introduction</h2>
                        <p className={styles.text}>
                            Welcome to [Platform Name] ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your personal information when you use our online educational platform.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>2. Information We Collect</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Personal Information: Name, email, phone number, and other details you provide during registration.</li>
                            <li className={styles.listItem}>Usage Data: Information about how you use our platform, including page visits, time spent, and interactions.</li>
                            <li className={styles.listItem}>Cookies: We use cookies and similar technologies to improve user experience.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>3. How We Use Your Information</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>To provide and improve our services.</li>
                            <li className={styles.listItem}>To personalize your learning experience.</li>
                            <li className={styles.listItem}>To communicate updates, promotions, and support.</li>
                            <li className={styles.listItem}>To ensure security and prevent fraudulent activities.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>4. Sharing Your Information</h2>
                        <p className={styles.text}>
                            We do not sell or rent your personal information. However, we may share data with third-party service providers for analytics, payment processing, and security purposes.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>5. Data Security</h2>
                        <p className={styles.text}>
                            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>6. Your Rights</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>You can access, update, or delete your personal data.</li>
                            <li className={styles.listItem}>You can opt out of marketing communications.</li>
                            <li className={styles.listItem}>You may request a copy of your stored data.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>7. Third-Party Links</h2>
                        <p className={styles.text}>
                            Our platform may contain links to third-party websites. We are not responsible for their privacy practices.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>8. Changes to Privacy Policy</h2>
                        <p className={styles.text}>
                            We may update this Privacy Policy from time to time. Continued use of our platform constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>9. Contact Information</h2>
                        <p className={styles.text}>For any questions regarding this Privacy Policy, contact us at [support email].</p>
                    </section>
                </div>
            </div>
        </Mainstudentwrapper>
    )
}

export default Privacypolicyhome;
