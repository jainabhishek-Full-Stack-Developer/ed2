"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Pricingcard from "./Pricingcard";

const Pricinghome = () => {
    const [activeTab, setActiveTab] = useState("content-1-4");
    return (
        <section>
            <div className={styles.pricingHeaderContainer}>
                <h2 className={styles.pricingHeading}>Pick a pack, start learning!</h2>
            </div>
            <div className={styles.tabMenu}>
                <ul className={styles.navTabs}>
                    <li>
                        <button
                            className={`${styles.tabButton} ${activeTab === "content-1-4" ? styles.active : ""}`}
                            onClick={() => setActiveTab("content-1-4")}
                        >
                            1:6 Class <small className={`${activeTab === "content-1-4" ? styles.activeSubtitle : styles.subtitle}`}>(Group: 45 mins)</small>
                        </button>

                    </li>
                    <li>
                        <button
                            className={`${styles.tabButton} ${activeTab === "content-1-1" ? styles.active : ""}`}
                            onClick={() => setActiveTab("content-1-1")}
                        >
                            1:1 Class <small className={`${activeTab === "content-1-1" ? styles.activeSubtitle : styles.subtitle}`}>(Private: 25 mins)</small>
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.pricingCardContainer}>
                <Pricingcard />
                <Pricingcard />
                <Pricingcard />
            </div>
        </section>
    )
}

export default Pricinghome;
