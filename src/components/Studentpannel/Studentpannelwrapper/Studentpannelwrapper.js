import StudentpannelFooter from "../StudentpannelFooter/StudentpannelFooter";
import StudentpannelHeader from "../StudentpannelHeader/StudentpannelHeader";
import Studentpannelsidebar from "../Studentpannelsidebar/Studentpannelsidebar";
import styles from "./page.module.css";

const Studentpannelwrapper = ({ children ,studentpannelHeading}) => {
    return (
        <main className={styles.studentPanelWrapper}>
            <div>
                <Studentpannelsidebar />
            </div>
            <div className={styles.studentPanelWrapperMainContent}>
                <div className={styles.studentPanelWrapperHeaderBox}>
                    <StudentpannelHeader studentpannelHeading={studentpannelHeading}/>
                </div>
                <section className={styles.studentPanelWrapperContentBox}>
                    {children}
                </section>
                <div className={styles.studentPanelWrapperFooterBox}>
                    <StudentpannelFooter />
                </div>
            </div>
        </main>
    )
}

export default Studentpannelwrapper;
