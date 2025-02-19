
const Studentreviewcard = ({ title, teacher, time }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.teacher}>👨‍🏫 {teacher}</p>
                <p className={styles.time}>⏰ {time}</p>
                <div className={styles.classesTypeSection}>
                    <button type="button" className={styles.reviewBtn}>Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default Studentreviewcard;
