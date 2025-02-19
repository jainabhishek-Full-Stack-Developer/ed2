import { AiOutlineCheckCircle } from 'react-icons/ai';
import styles from './page.module.css';

const Batchhome = () => {
    const handleGoToDashboard = () => {
        window.location.href = '/student-dashboard';
    };

    return (
        <div className={styles.classBookingContainer}>
            <div className={styles.classOverlay}></div>
            <div className={styles.classBookingBox}>
                <div className={styles.classMessage}>
                    <div className={styles.classIcon}>
                        <AiOutlineCheckCircle className={styles.classCheckmark} />
                    </div>
                    <p className={styles.classMessageText}>Your booking has been confirmed!</p>
                </div>
                <div className={styles.classInfoContainer}>
                    <p className={styles.classInfoText}>
                        Your booking is being processed. You'll be notified once it's ready. Check your booking status in the dashboard
                    </p>
                </div>
                <button className={styles.classButton} onClick={handleGoToDashboard}>
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Batchhome;
