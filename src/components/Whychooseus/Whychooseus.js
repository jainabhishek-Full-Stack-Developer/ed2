import styles from "./page.module.css";
import { TiTick } from "react-icons/ti";

const Whychooseus = () => {
    return (
        <section className={styles.whyChooseBgContainer}>
            <div>
                <h1 className={styles.whyChooseHeading}>Why Choose Us</h1>
                <p className={styles.whyChooseText}>Learn with experts, build projects, and get career-ready with our excellence-driven education</p>
            </div>
            <div className={styles.whyChooseContainer}>
                <div className={styles.whySellerCard}>
                    <div>
                        <TiTick className={styles.whySellerCardIcon} />
                        <h4>Industry-Leading Courses</h4>
                        <p>Our expert-curated content is designed by top educators and professionals, covering in-demand fields such as technology, business, design, marketing, and more.</p>
                    </div>
                </div>
                <div className={styles.whySellerCard}>
                    <div>
                        <TiTick className={styles.whySellerCardIcon} />
                        <h4>Interactive & Engaging Learning</h4>
                        <p>Our courses include hands-on projects, quizzes, and real-world case studies, along with live Q&A sessions and interactive discussions to enhance learning</p>
                    </div>
                </div>
                <div className={styles.whySellerCard}>
                    <div>
                        <TiTick className={styles.whySellerCardIcon} />
                        <h4>Learn at Your Own Pace</h4>
                        <p>With flexible schedules to fit your lifestyle and lifetime access to course materials, you can learn at your own pace and revisit content anytime.</p>
                    </div>
                </div>
                <div className={styles.whySellerCard}>
                    <div>
                        <TiTick className={styles.whySellerCardIcon} />
                        <h4>Learn at Your Own Pace</h4>
                        <p>Enjoy the flexibility of learning at your own pace with schedules that fit your lifestyle and lifetime access to course materials for continuous growth.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whychooseus;
