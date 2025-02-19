import Mainstudentwrapper from '../Mainstudentwrapper/Mainstudentwrapper';
import Testimonial from '../Testimonial/Testimonial';
import styles from "./page.module.css";
import { FaGraduationCap, FaLaptopCode, FaClock, FaCertificate, FaUsers } from 'react-icons/fa';

import Joinnowcontent from '../Joinnowcontent/Joinnowcontent';

const Aboutuscontent = () => {
    return (
        <Mainstudentwrapper>
            <section>
                <h1 className={styles.aboutUsHeading}>About Us</h1>
                <div className={styles.aboutSectionTop}>
                    <div className={styles.aboutImageContainer}>
                        <img src="/images/about-us.jpg" alt="About CourseHive" />
                    </div>
                    <div className={styles.aboutContent}>
                        <h2>CourseHive changed my life!</h2>
                        <p>
                            At <strong>CourseHive</strong>, we are redefining education by making learning
                            <span className={styles.highlight}> accessible, engaging, and career-focused.</span>
                            Our platform equips students with <strong>industry-relevant skills</strong> through
                            interactive courses, expert-led training, and hands-on projects.
                        </p>
                        <p>
                            Whether you're looking to <strong>master a new skill</strong>, advance your career, or explore
                            a passion, CourseHive offers a flexible and dynamic learning experience tailored to your goals.
                            With a focus on <strong>real-world applications</strong> and career success, we empower learners
                            to thrive in today's competitive world.
                        </p>
                        <p>
                            <strong>Join CourseHive</strong> and take the next step toward a brighter future—
                            where learning meets <span className={styles.highlight}>innovation</span>, and opportunities are limitless.
                        </p>
                    </div>
                </div>
                <div className={styles.missionVisionSection}>
                    <h2 className={styles.aboutUsHeading}>Our Mission & Vision</h2>
                    <div className={styles.missionVisionContainer}>
                        <div className={styles.missionBox}>
                            <h3>Our Mission</h3>
                            <p>
                                We are committed to <strong>bridging the education gap</strong> by providing
                                world-class courses, expert guidance, and an interactive learning experience.
                                Our goal is to <strong>empower students, professionals, and lifelong learners</strong>
                                with skills that help them succeed in today's competitive world.
                            </p>
                        </div>
                        <div className={styles.visionBox}>
                            <h3>Our Vision</h3>
                            <p>
                                We envision a future where <strong>anyone, anywhere</strong> can access high-quality
                                education without barriers. Our platform aims to be the <strong>go-to destination</strong>
                                for learners seeking flexible, affordable, and industry-relevant courses.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.whyChooseSection}>
                    <h2 className={styles.aboutUsHeading}>Why Choose CourseHive?</h2>
                    <p className={styles.whyChooseText}>We stand out from the rest by offering a unique learning experience backed by the following features:</p>
                    <div className={styles.featuresList}>
                        <div className={styles.featureItem}>
                            <div className={styles.courseWhyIconWrapper}>
                                <div className={styles.iconContainer}>
                                    <FaGraduationCap size={32} />
                                </div>
                            </div>
                            <h3>Industry-Leading Courses</h3>
                            <ul>
                                <li>Expert-curated content designed by top educators & professionals</li>
                                <li>Covering in-demand fields like technology, business, design, marketing, and more</li>
                            </ul>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.courseWhyIconWrapper}>
                                <div className={styles.iconContainer}>
                                    <FaLaptopCode size={32} />
                                </div>
                            </div>
                            <h3>Interactive & Engaging Learning</h3>
                            <ul>
                                <li>Hands-on projects, quizzes, and real-world case studies</li>
                                <li>Live Q&A sessions and interactive discussions</li>
                            </ul>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.courseWhyIconWrapper}>
                                <div className={styles.iconContainer}>
                                    <FaClock size={32} />
                                </div>
                            </div>
                            <h3>Learn at Your Own Pace</h3>
                            <ul>
                                <li>Flexible schedules to fit your lifestyle</li>
                                <li>Lifetime access to course materials</li>
                            </ul>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.courseWhyIconWrapper}>
                                <div className={styles.iconContainer}>
                                    <FaCertificate size={32} />
                                </div>
                            </div>
                            <h3>Certifications & Career Growth</h3>
                            <ul>
                                <li>Earn recognized certificates to boost your resume</li>
                                <li>Get career support, mentorship, and job placement assistance</li>
                            </ul>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.courseWhyIconWrapper}>
                                <div className={styles.iconContainer}>
                                    <FaUsers size={32} />
                                </div>
                            </div>
                            <h3>Global Community of Learners</h3>
                            <ul>
                                <li>Join a thriving network of students, instructors, and professionals</li>
                                <li>Engage in discussions, collaborations, and networking opportunities</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <Joinnowcontent />
                <Testimonial />
               
            </section>
        </Mainstudentwrapper>
    )
}

export default Aboutuscontent
