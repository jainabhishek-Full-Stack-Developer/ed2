import styles from "./page.module.css";

const Studentclassescard = ({
    courseName,
    studentName,
    dateTime,
    cancelledBy,
    cancellationTime,
    classEnded,
    recordingLink,
    classesStatus,
    paymentStatus
}) => {


    return (
        <div className={styles.cardClasses}>
            <div className={styles.classesContent}>
                <h2 className={styles.classesCardTitle}>{courseName}</h2>
                <p className={styles.classesCardStudentName}>{studentName}</p>
                <p className={styles.classesCardDateTime}>
                    {new Date(dateTime).toLocaleString()}
                </p>
                <div style={{ display: "flex" }}>
                    {
                        (paymentStatus === 'paid') && (
                            <div className={styles.classesStatusSection}>
                                <span>Paid</span>
                            </div>
                        )
                    }
                    {
                        (paymentStatus === 'unpaid') && (
                            <div className={styles.classesStatusSection}>
                                <span>Demo</span>
                            </div>
                        )
                    }
                    {
                        (classEnded === true) && (
                            <div className={styles.classesStatusDone}>
                                <span>Done</span>
                            </div>
                        )
                    }
                    {
                        (classesStatus === "deactive") && (
                            <div className={styles.classesCardCancelled}>
                                <span>Cancelled</span>
                            </div>
                        )
                    }


                </div>


                {classesStatus === "deactive" && (
                    <div className={styles.cancellationDetails}>
                        <p className={styles.cancellationInfo}>
                            {cancelledBy} <span style={{ margin: "0 2px" }}>,</span>
                            {new Date(cancellationTime).toLocaleString()}
                        </p>
                    </div>
                )}



                {
                    (classesStatus === 'active') && (
                        <div className={styles.classesButtonContainer}>
                            <div>
                                <button type="button" className={styles.classActionButton}>Join</button>
                            </div>
                            <div>
                                <button type="button" className={styles.classActionButton}>Cancel</button>
                            </div>
                        </div>
                    )
                }


                {
                    (classesStatus === 'done' && classEnded === true) && <button className={styles.classActionButton}>Recorded Class</button>
                }
            </div>
        </div>
    );
};

export default Studentclassescard;
