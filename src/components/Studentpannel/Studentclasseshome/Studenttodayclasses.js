import Studentclassescard from "./Studentclassescard";
import styles from "./page.module.css";
import { pastClassesData } from "@/constant/dataClasses";

const Studenttodayclasses = () => {
    return (
        <>
            <div className={styles.allClassesFilter}>
                <div>
                    <input type="date" />
                </div>
                <div>
                    <button type="button">Filter</button>
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {pastClassesData.map((el, index) => (
                    <Studentclassescard
                        key={index}
                        courseName={el.courseName}
                        studentName={el.studentName}
                        dateTime={el.dateTime}
                        classesStatus={el.classesStatus}
                        cancelledBy={el.cancelledBy}
                        cancellationTime={el.cancellationTime}
                        isBooked={el.isBooked}
                        classEnded={el.classEnded}
                        paymentStatus={el.paymentStatus}
                        recordingLink={el.recordingLink}
                    />
                ))}
            </div>
        </>
    )
}

export default Studenttodayclasses;
