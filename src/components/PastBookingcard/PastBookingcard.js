import { FaCalendarAlt, FaClock, FaUser, FaUserTie } from 'react-icons/fa'; // Import icons
import styles from './page.module.css'; // Import the CSS module

const PastBookingcard = ({ courseName, date, time, studentName, parentOrTeacher, bookingStatus }) => {
    return (
        <div className={styles.pastBookingWrapper}>
            {/* Booking Header */}
            <div className={styles.pastBookingHeader}>
                <div className={styles.pastBookingCourseName}>{courseName}</div>
                <div className={`${styles.pastBookingStatus} ${bookingStatus === 'Cancelled' ? styles.cancelled : ''}`}>
                    {bookingStatus === 'Cancelled' ? 'Cancelled' : 'Booked'}
                </div>
            </div>

            {/* Combined Details Section */}
            <div className={styles.pastBookingDetails}>
                <div className={styles.pastBookingDetailItem}>
                    <FaCalendarAlt className={styles.detailIcon} />
                    <p><strong>Course Date:</strong> {date}</p>
                </div>
                <div className={styles.pastBookingDetailItem}>
                    <FaClock className={styles.detailIcon} />
                    <p><strong>Course Time:</strong> {time}</p>
                </div>
                <div className={styles.pastBookingDetailItem}>
                    <FaUser className={styles.detailIcon} />
                    <p><strong>Student Name:</strong> {studentName}</p>
                </div>
                <div className={styles.pastBookingDetailItem}>
                    <FaUserTie className={styles.detailIcon} />
                    <p><strong>Booked by:</strong> {parentOrTeacher}</p>
                </div>
            </div>

            {/* View Details Button */}
            <button className={styles.pastBookingDetailsBtn}>
                View Details
            </button>
        </div>
    );
}

export default PastBookingcard;
