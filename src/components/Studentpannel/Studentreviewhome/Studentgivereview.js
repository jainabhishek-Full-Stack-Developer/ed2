"use client";
import { useState } from "react";
import Studentpannelmodal from "../Studentpannelmodal/Studentpannelmodal";
import styles from "./page.module.css";
import { FaStar } from "react-icons/fa6";


const Studentgivereview = () => {
    const [openModal, setOpenModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>React Masterclass</h2>
                        <p className={styles.teacher}>👨‍🏫 John Doe</p>
                        <p className={styles.time}>⏰ 10:00 AM - 12:00 PM</p>
                        <div className={styles.classesTypeSection}>
                            <button type="button" className={styles.reviewBtn} onClick={() => setOpenModal(true)}>Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
            <Studentpannelmodal setOpenModal={setOpenModal} openModal={openModal}>
                <h3 className={styles.formUpdateHeading}>Share Review</h3>
                <div>
                    <div className={styles.feedbackContainer}>
                        <p>How was your experience?</p>
                        <span>Your review will help us Improve our services and make it user friendly for more users.</span>
                    </div>
                    <div className={styles.feedBackSimpleBox}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={styles.feedBackButton}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                            >
                                <FaStar
                                    size={40}
                                    className={styles.feedBackIcon}
                                    color={(hover || rating) >= star ? "#FFD700" : "#ccc"} // Gold color for selected stars
                                />
                            </button>
                        ))}
                    </div>
                    <div>
                        <form>
                            <div className={styles.formBox}>
                                <div className={styles.inputGroup}>
                                    <textarea rows={6} placeholder="Share Feedback"></textarea>
                                </div>
                            </div>
                            <div className={styles.submitBtn}>
                                <button type="submit">Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Studentpannelmodal>
        </>
    )
}

export default Studentgivereview;
