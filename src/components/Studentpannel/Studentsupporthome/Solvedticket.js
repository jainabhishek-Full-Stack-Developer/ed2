import styles from "./page.module.css";


const Solvedcard = () => {
    return (
        <div className={styles.solvedTicketCard}>
            <h2 className={styles.title}>Payment</h2>
            <p className={styles.description}>Your issue has been successfully resolved.</p>

            <div className={styles.footer}>
                <span className={styles.date}>Resolved on: 2025-02-18</span>
                <span className={`${styles.status} ${styles.completed}`}>Solved</span>

            </div>
        </div>
    )
}


const SolvedTicket = () => {
    return (
        <>
            <div className={styles.solvedCardContainer}>
                <Solvedcard />
                <Solvedcard />
                <Solvedcard />
            </div>
        </>

    );
};

export default SolvedTicket;
