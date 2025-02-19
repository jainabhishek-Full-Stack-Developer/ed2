import Coursechapter from "../Coursechapter/Coursechapter";
import Faqcontent from "../Faqcontent/Faqcontent";
import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper"
import Testimonial from "../Testimonial/Testimonial";
import styles from "./page.module.css";
import { FaPlay, FaChild, FaChalkboardTeacher, FaCertificate, FaBriefcase, FaLanguage } from "react-icons/fa";


const Coursedetailscontent = () => {
    return (
        <Mainstudentwrapper>
            <section>
                {/* <div className={styles.courseDetailsHeroSection}>
                    <div>
                        <div className={styles.courseDetailsHeroText}>
                            <h1>Little Yogi - Gita for Kids (4-6 yrs)</h1>
                            <p>Little Yogi - Gita for Kids" is a fun and engaging course designed for young minds (ages 4-6) to explore the timeless wisdom of the Bhagavad Gita. Through storytelling, interactive activities, and simple life lessons, children will develop essential values like kindness, courage, and mindfulness in a playful and age-appropriate way.</p>
                            <button className={styles.courseDetailsEnrollButton}>Enroll Now - ₹999</button>
                        </div>
                    </div>
                    <div>
                        <img src="/images/g2.jpg" alt="hero" />
                    </div>
                </div> */}
                <div className={styles.courseDetailsContainer}>
                    {/* Hero Section */}
                    <div className={styles.courseDetailsHero}>
                        <div className={styles.courseDetailsHeroText}>
                            <h1>Little Yogi - Gita for Kids (4-6 yrs)</h1>
                            <p>Little Yogi - Gita for Kids" is a fun and engaging course designed for young minds (ages 4-6) to explore the timeless wisdom of the Bhagavad Gita. Through storytelling, interactive activities, and simple life lessons, children will develop essential values like kindness, courage, and mindfulness in a playful and age-appropriate way.</p>
                            <button className={styles.courseDetailsEnrollButton}>Enroll Now</button>
                        </div>

                    </div>

                    {/* Course Highlights */}
                    <div className={styles.courseDetailsHighlightsSection}>
                        <div className={styles.courseDetailsHighlights}>
                            <div className={styles.courseDetailsCardHighlight}>
                                <div className={styles.courseDetailsCardTextContainer}>
                                    <h3>Course Duration</h3>
                                    <p>6 Weeks | 12 Sessions</p>
                                </div>
                            </div>
                            <div className={styles.courseDetailsCardHighlight}>
                                <div className={styles.courseDetailsCardTextContainer}>
                                    <h3>Interactive Learning</h3>
                                    <p>Stories, yoga, sloka chanting & fun activities</p>
                                </div>
                            </div>
                            <div className={styles.courseDetailsCardHighlight}>
                                <div className={styles.courseDetailsCardTextContainer}>
                                    <h3>Expert Instructor</h3>
                                    <p>Guided by experienced educators in Gita wisdom</p>
                                </div>
                            </div>
                            <div className={styles.courseDetailsCardHighlight}>
                                <div className={styles.courseDetailsCardTextContainer}>
                                    <h3>Child-Friendly Approach</h3>
                                    <p>Simple, fun, and engaging content for young minds</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Coursechapter />



                    {/* Course Overview */}

                    <div className={styles.courseWhy}>
                        <div>
                            <h1 className={styles.courseWhyHeading}>Why Join This Course?</h1>
                            <p className={styles.courseWhyText}>Children will explore the Bhagavad Gita’s teachings in a creative way, helping them develop patience, focus, and kindness.</p>
                        </div>
                        <div className={styles.courseWhyContainer}>
                            <div className={styles.courseWhyCard}>
                                <div>
                                    <FaChild className={styles.courseWhyCardIcon} />
                                    <h4>Engaging Storytelling Sessions</h4>
                                    <ul>
                                        <li> Our interactive storytelling method makes ancient teachings fun and relatable for kids, helping them absorb valuable life lessons.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.courseWhyCard}>
                                <div>
                                    <FaPlay className={styles.courseWhyCardIcon} />
                                    <h4>Interactive & Engaging Learning</h4>
                                    <ul>
                                        <li>Simple and effective yoga practices improve focus, reduce stress, and promote a healthy lifestyle from an early age.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.courseWhyCard}>
                                <div>
                                    <FaCertificate className={styles.courseWhyCardIcon} />
                                    <h4>Learn at Your Own Pace</h4>
                                    <ul>
                                        <li>Every child will receive a certificate recognizing their participation and learning, boosting their confidence and motivation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Instructor Section */}
                    <div style={{display:"none"}}>
                        <div>
                            <h1 className={styles.courseWhyHeading}>Meet Your Instructor</h1>
                            <p className={styles.courseWhyText}>Our experienced instructors make learning engaging and interactive, simplifying complex concepts to help young minds thrive.</p>
                        </div>
                        <div className={styles.instructorCardWrapper}>
                            <div className={styles.instructorCard}>
                                <div className={styles.instructorImage}>
                                    <img src="/images/instructor.jpg" alt="Instructor" />
                                </div>
                                <div className={styles.instructorInfo}>
                                    <h3 className={styles.instructorName}>Swami Aditya</h3>
                                    <p className={styles.instructorTitle}>Senior Educator & Mentor</p>

                                    <div className={styles.instructorDetail}>
                                        <FaBriefcase className={styles.icon} />
                                        10+ Years of Experience
                                    </div>
                                    <div className={styles.instructorDetail}>
                                        <FaLanguage className={styles.icon} />
                                        Speaks: English, Hindi, Sanskrit
                                    </div>
                                    <div className={styles.instructorDetail}>
                                        <FaChalkboardTeacher className={styles.icon} />
                                        5000+ Students Taught
                                    </div>
                                    <p className={styles.instructorBio}>
                                        Swami Aditya blends ancient wisdom with modern education, making learning fun and interactive for kids.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.instructorCard}>
                                <div className={styles.instructorImage}>
                                    <img src="/images/instructor.jpg" alt="Instructor" />
                                </div>
                                <div className={styles.instructorInfo}>
                                    <h3 className={styles.instructorName}>Swami Aditya</h3>
                                    <p className={styles.instructorTitle}>Senior Educator & Mentor</p>

                                    <div className={styles.instructorDetail}>
                                        <FaBriefcase className={styles.icon} />
                                        10+ Years of Experience
                                    </div>
                                    <div className={styles.instructorDetail}>
                                        <FaLanguage className={styles.icon} />
                                        Speaks: English, Hindi, Sanskrit
                                    </div>
                                    <div className={styles.instructorDetail}>
                                        <FaChalkboardTeacher className={styles.icon} />
                                        5000+ Students Taught
                                    </div>

                                    <p className={styles.instructorBio}>
                                        Swami Aditya blends ancient wisdom with modern education, making learning fun and interactive for kids.
                                    </p>


                                </div>
                            </div>
                            <div className={styles.instructorCard}>
                                <div className={styles.instructorImage}>
                                    <img src="/images/instructor.jpg" alt="Instructor" />
                                </div>
                                <div className={styles.instructorInfo}>
                                    <h3 className={styles.instructorName}>Swami Aditya</h3>
                                    <p className={styles.instructorTitle}>Senior Educator & Mentor</p>

                                    <div className={styles.instructorDetail}>
                                        <FaBriefcase className={styles.icon} />
                                        10+ Years of Experience
                                    </div>
                                    <div className={styles.instructorDetail}>
                                        <FaLanguage className={styles.icon} />
                                        Speaks: English, Hindi, Sanskrit
                                    </div>
                                    <div className={styles.instructorDetail}>
                                        <FaChalkboardTeacher className={styles.icon} />
                                        5000+ Students Taught
                                    </div>

                                    <p className={styles.instructorBio}>
                                        Swami Aditya blends ancient wisdom with modern education, making learning fun and interactive for kids.
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <Testimonial />
                <Faqcontent />
            </section>




        </Mainstudentwrapper>
    )
}

export default Coursedetailscontent
