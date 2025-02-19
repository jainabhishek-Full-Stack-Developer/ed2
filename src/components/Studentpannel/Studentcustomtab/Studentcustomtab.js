"use client";
import { useState } from "react";
import styles from "./page.module.css";

const Studentcustomtab = ({ tabs }) => {
    const [studentCustomTab, setStudentCustomTab] = useState(tabs[0].key); // Default to the first tab

    const renderTabContent = () => {
        const activeTab = tabs.find((tab) => tab.key === studentCustomTab);
        return activeTab ? activeTab.content : null;
    };
    return (
        <section>
            <div>
                <ul className={styles.adminTabsContainer}>
                    {tabs.map((tab) => (
                        <li key={tab.key}>
                            <button
                                type="button"
                                onClick={() => setStudentCustomTab(tab.key)}
                                className={`${studentCustomTab === tab.key ? styles.adminActiveTabs : ""}`}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>{renderTabContent()}</div>
        </section>
    )
}

export default Studentcustomtab;
