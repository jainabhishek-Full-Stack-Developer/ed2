import styles from "./page.module.css";

const StudentpannelFooter = () => {
    return (
        <footer className={styles.studentPannelFooter}>
            <p>© {new Date().getFullYear()} CourseHive. All rights reserved.</p>
        </footer>
    )
}

export default StudentpannelFooter;
