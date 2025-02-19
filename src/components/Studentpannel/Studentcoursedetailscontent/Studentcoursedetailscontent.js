"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaClock, FaBookOpen } from "react-icons/fa";
import Studentpannelwrapper from "../Studentpannelwrapper/Studentpannelwrapper";
import styles from "./page.module.css";

const courseSessions = [
    { id: 1, title: "Algebra Basics", time: "10:00 AM", details: "Introduction to Algebra, Variables, and Equations." },
    { id: 2, title: "Quadratic Equations", time: "11:30 AM", details: "Solving Quadratic Equations and Graph Interpretation." },
    { id: 3, title: "Probability & Statistics", time: "2:00 PM", details: "Understanding Probability Theory and Data Analysis." },
];

const Studentcoursedetailscontent = () => {
    const [openSession, setOpenSession] = useState(null);

    const toggleSession = (id) => {
        setOpenSession(openSession === id ? null : id);
    };

    return (
        <Studentpannelwrapper studentpannelHeading="Mathematics - Course Sessions">
            <div className={styles.sessionList}>
                {courseSessions.map((session) => (
                    <div key={session.id} className={styles.sessionCard}>
                        <div className={styles.sessionHeader} onClick={() => toggleSession(session.id)}>
                            <div className={styles.sessionInfo}>
                                <FaBookOpen className={styles.icon} />
                                <span>{session.title}</span>
                            </div>
                            <div className={styles.sessionTime}>
                                <FaClock className={styles.icon} /> {session.time}
                                {openSession === session.id ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                        </div>
                        {openSession === session.id && (
                            <div className={styles.sessionDetails}>
                                <p>{session.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Studentpannelwrapper>
    );
};

export default Studentcoursedetailscontent;
