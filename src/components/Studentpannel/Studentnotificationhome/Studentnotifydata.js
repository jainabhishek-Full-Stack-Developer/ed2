"use client";
import styles from "./page.module.css";
import { FaCalendarCheck, FaClock, FaBell } from "react-icons/fa";
import { useState } from "react";

const notifications = [
    {
        id: 1,
        message: "Upcoming Science Quiz on Friday",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        time: "Today at 3:00 PM",
        type: "Reminder",
        icon: <FaCalendarCheck />,
        tagColor: "#FF8C00",
    },
    {
        id: 2,
        message: "Assignment deadline for Mathematics",
        details: "Submit your algebra assignment before the deadline to avoid late penalties. Reach out to your instructor for any queries.",
        time: "Tomorrow at 12:00 PM",
        type: "Urgent",
        icon: <FaClock />,
        tagColor: "#DC143C",
    },
    {
        id: 3,
        message: "Live session with instructor at 5 PM",
        details: "Join the live Q&A session with your instructor to clarify doubts and discuss upcoming projects.",
        time: "Today at 5:00 PM",
        type: "Live",
        icon: <FaBell />,
        tagColor: "#1E90FF",
    },
];

const Studentnotifydata = () => {
    const [openNotification, setOpenNotification] = useState(null);

    const toggleNotification = (id) => {
        setOpenNotification(openNotification === id ? null : id);
    };

    return (
        <div className={styles.notificationContainer}>
            {/* Search Bar */}
            <div className={styles.searchBar}>
                <input type="search" className={styles.inputSearchField} placeholder="Search notifications..." />
            </div>

            {/* Notification List */}
            <div className={styles.notificationList}>
                {notifications.map((notification) => (
                    <div key={notification.id} className={styles.notificationWrapper}>
                        <div 
                            className={styles.notificationCard} 
                            onClick={() => toggleNotification(notification.id)}
                            style={{ borderLeft: `4px solid ${notification.tagColor}` }}
                        >
                            <div className={styles.icon} style={{ color: notification.tagColor }}>
                                {notification.icon}
                            </div>
                            <div className={styles.content}>
                                <p className={styles.message}>{notification.message}</p>
                                <div className={styles.meta}>
                                    <span className={styles.tag} style={{ backgroundColor: notification.tagColor, color: "#fff" }}>
                                        {notification.type}
                                    </span>
                                    <span className={styles.time}>{notification.time}</span>
                                </div>
                            </div>
                        </div>

                        {/* Expandable Details */}
                        {openNotification === notification.id && (
                            <div className={styles.studentNotificationDetails}>
                                <p>{notification.details}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Studentnotifydata;
