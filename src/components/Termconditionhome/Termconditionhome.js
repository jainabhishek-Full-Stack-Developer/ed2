import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper";
import styles from "./page.module.css";

const Termconditionhome = () => {
    return (
        <Mainstudentwrapper>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.termConditionHeading}>Terms and Conditions</h1>                   
                </div>
                <div>
                    <section className={styles.section}>
                        <h2 className={styles.heading}>1. Introduction</h2>
                        <p className={styles.text}>
                            Welcome to [Platform Name] ("we," "our," or "us"). These Terms and Conditions govern your use of our online educational platform. By accessing or using our platform, you agree to comply with these terms.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>2. Eligibility</h2>
                        <p className={styles.text}>
                            Our platform is designed for students from Kindergarten (KG1) to Grade 10. If you are under 18, you need parental or legal guardian consent to use our services.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>3. Account Registration</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>You must provide accurate and complete information when creating an account.</li>
                            <li className={styles.listItem}>Parents or guardians must create and manage accounts for students under 13.</li>
                            <li className={styles.listItem}>You are responsible for maintaining the confidentiality of your account credentials.</li>
                            <li className={styles.listItem}>Any activity under your account is your responsibility.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>4. Use of Services</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Our platform provides educational content, courses, and other learning resources for students from KG1 to Grade 10.</li>
                            <li className={styles.listItem}>You may not use our services for any illegal or unauthorized purpose.</li>
                            <li className={styles.listItem}>You must not engage in activities that disrupt or harm our platform.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>5. Payments and Refunds</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Certain courses or services may require payment.</li>
                            <li className={styles.listItem}>All fees are non-refundable unless stated otherwise.</li>
                            <li className={styles.listItem}>We reserve the right to change our pricing at any time.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>6. Intellectual Property</h2>
                        <p className={styles.text}>
                            All content, including course materials, videos, and text, is owned by us or our licensors. You may not copy, distribute, or modify any content without permission.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>7. User-Generated Content</h2>
                        <p className={styles.text}>
                            You retain ownership of content you post but grant us a license to use, distribute, and modify it. You must not post any harmful, illegal, or offensive content.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>8. Termination of Account</h2>
                        <p className={styles.text}>
                            We reserve the right to suspend or terminate your account if you violate these terms. You may terminate your account at any time.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>9. Limitation of Liability</h2>
                        <p className={styles.text}>
                            We are not responsible for any damages resulting from your use of our platform. We do not guarantee the accuracy or reliability of content on our platform.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>10. Privacy Policy</h2>
                        <p className={styles.text}>Your use of our platform is also governed by our Privacy Policy.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>11. Changes to Terms</h2>
                        <p className={styles.text}>
                            We may update these Terms and Conditions from time to time. Continued use of our platform constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>12. Contact Information</h2>
                        <p className={styles.text}>For any questions regarding these Terms and Conditions, contact us at [support email].</p>
                    </section>
                </div>
            </div>
        </Mainstudentwrapper>
    )
}

export default Termconditionhome;
