import styles from "./page.module.css";

const StudentpanneldashboardCard = ({ title, value, icon}) => {
    return (
        <div className={styles.dashboardCard}>
            <div className={styles.dashboardCardIcon}>
                {icon}
            </div>
            <div className={styles.dashboardCardInfo}>
                <h4 className={styles.dashboardCardTitle}>{title}</h4>
                <p className={styles.dashboardCardValue}>{value}</p>
            </div>
        </div>
    );
};

export default StudentpanneldashboardCard;
