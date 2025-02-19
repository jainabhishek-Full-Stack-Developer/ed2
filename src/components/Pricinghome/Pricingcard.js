import Link from "next/link";
import styles from "./page.module.css";

const Pricingcard = () => {
    return (
        <div className={styles.priceCard}>
            <h3 className={styles.title}>Starter</h3>
            <p className={styles.description}>
                Best option for personal use &amp; for your next project.
            </p>
            <div className={styles.priceContainer}>
                <span className={styles.price}>$29</span>
                <span className={styles.pricePeriod}>/month</span>
            </div>
            <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Individual configuration</span>
                </li>
                <li className={styles.featureItem}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                </li>
                <li className={styles.featureItem}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Team size: 1 developer</span>
                </li>
                <li className={styles.featureItem}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Premium support: 6 months</span>
                </li>
                <li className={styles.featureItem}>
                    <svg className={styles.icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Free updates: 6 months</span>
                </li>
            </ul>
            <Link href="/" className={styles.button}>
                Book Now
            </Link>
        </div>
    )
}

export default Pricingcard;
