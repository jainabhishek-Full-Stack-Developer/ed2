"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { SiCoursera, SiGoogleclassroom } from "react-icons/si";
import { IoMdNotificationsOutline, IoIosCamera } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserFriends, FaBook } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { MdOutlineGridOn } from "react-icons/md";


const Studentpannelsidebar = () => {
    return (
        <>
            <aside className={styles.studentPannelSideMenu}>
                <div className={styles.studentPannelBrandSection}>
                    <div className={styles.stduentPannelLogo}>
                        <Link href="/student-dashboard" aria-label="CourseHive Home">
                            <span>CourseHive</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.studentPannelDashboardLink}>
                    <Link href="/student-dashboard">
                        <span >Dashboard</span>
                    </Link>
                </div>
                <div className={styles.studentPannelSubmenuContainer}>
                    {/* <div className={styles.dashboardTitle}>
                        <Link href="/student-courses">
                            <SiCoursera className={styles.icon} />
                            <span>Enrolled Courses</span>
                        </Link>
                    </div> */}
                    <div className={styles.dashboardTitle}>
                        <Link href="/student-classes">
                            <SiGoogleclassroom className={styles.icon} />
                            <span>My Classes</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/home-work">
                            <FaBook className={styles.icon} />
                            <span>Homework</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/recordings">
                            <IoIosCamera className={styles.icon} />
                            <span>Recordings</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/transactions">
                            <IoCard className={styles.icon} />
                            <span>Transactions</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/student-support">
                            <MdOutlineSupportAgent className={styles.icon} />
                            <span>Support</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/leaderboard">
                            <MdOutlineGridOn className={styles.icon} />
                            <span>Leaderboard</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/student-notification">
                            <IoMdNotificationsOutline className={styles.icon} />
                            <span>Notification</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/student-review">
                            <MdOutlineRateReview className={styles.icon} />
                            <span>Reviews</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/student-referrals">
                            <FaMoneyCheckDollar className={styles.icon} />
                            <span>Referrals</span>
                        </Link>
                    </div>
                    <div className={styles.dashboardTitle}>
                        <Link href="/new-member">
                            <FaUserFriends className={styles.icon} />
                            <span>Members</span>
                        </Link>
                    </div>
                </div>
            </aside>
          
        </>
    )
}

export default Studentpannelsidebar;
