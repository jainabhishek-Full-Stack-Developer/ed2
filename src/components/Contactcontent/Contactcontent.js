import Mainstudentwrapper from '../Mainstudentwrapper/Mainstudentwrapper';
import styles from "./page.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


const Contactcontent = () => {
    return (
        <Mainstudentwrapper>
             <h1 className={styles.contactUsHeading}>Contact Us</h1>
            <section className={styles.contactSection}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <h1>Contact Us</h1>
                        <p>Have questions? We're here to help. Get in touch with us!</p>
                        <div className={styles.contactDetails}>
                            <div>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <p>123 Learning Street, Education City, India</p>
                            </div>
                            <div>
                                <FaEnvelope className={styles.contactIcon} />
                                <p><a href="mailto:support@coursehive.com">support@coursehive.com</a></p>
                            </div>
                            <div>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <h3>Send a Message</h3>
                        <form>
                            <div className={styles.contactFormInputContainer}>
                                <input type="text" className={styles.contactFormInputField} placeholder="Name" />
                            </div>
                            <div className={styles.contactFormInputContainer}>
                                <input type="email" className={styles.contactFormInputField} placeholder="Email address" />
                            </div>
                            <div className={styles.contactFormInputContainer}>
                                <textarea className={styles.contactFormInputField} placeholder="Enter Message" cols={8} rows={8} ></textarea>

                            </div>

                            <div className={styles.contactSubmitBtn}>
                                <button type="submit" >Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </Mainstudentwrapper>
    )
}

export default Contactcontent;
