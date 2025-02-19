"use client";
import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import { FaBell, FaBars, FaRegUser, FaUserFriends, FaBook, FaWallet } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SiGoogleclassroom } from "react-icons/si";
import { IoMdNotificationsOutline, IoMdLogOut, IoIosCamera } from "react-icons/io";
import { MdOutlineRateReview, MdOutlineSupportAgent } from "react-icons/md";
import { dataCountry } from "@/constant/dataCountry";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { MdOutlineGridOn } from "react-icons/md";


const StudentpannelHeader = ({ studentpannelHeading }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [adminMobileSidebar, setAdminMobileSidebar] = useState(false);
    const userName = "John Doe";
    const [accessToken, setAccessToken] = useState(null);
  
    const router = useRouter();
    const notificationRef = useRef(null);

    const sidebarMRef = useRef(null);

    const notifications = [
        { id: 1, message: "New assignment uploaded", time: "2 mins ago" },
        { id: 2, message: "Your test is scheduled for tomorrow", time: "1 hour ago" },
        { id: 3, message: "Course update available", time: "5 hours ago" },
    ];

    useEffect(() => {
        const token = sessionStorage.getItem("accessToken");
        setAccessToken(token);
      }, []);

    const handleAdminLogout = () => {
        sessionStorage.removeItem("accessToken");
        setAccessToken(null);
        router.push("/sign-in");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setNotificationOpen(false);
            }
            if (sidebarMRef.current && !sidebarMRef.current.contains(event.target)) {
                setAdminMobileSidebar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <header>
                <div className={styles.adminHeaderWrapper}>
                    <div className={styles.adminHeaderLeftSide}>
                        <div>
                            <button type="button" onClick={() => setAdminMobileSidebar(!adminMobileSidebar)}><FaBars size={25} /></button>
                        </div>
                        <div className={styles.leftSection}>
                            <h4>{studentpannelHeading}</h4>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.selectContainer}>
                            <select className={styles.customSelect}>
                                {dataCountry.map((el, index) => (
                                    <option key={index} value={el.country_name}>
                                        {el.country_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.flagImageBox}>
                            <img src="/images/f1.jpg" alt="flag" width={20} height={20} />
                        </div>
                        <div className={styles.walletContainer}>
                            <FaWallet className={styles.walletIcon} />
                            <span className={styles.walletAmount}>${500}</span>
                        </div>
                        <div className={styles.notificationWrapper} ref={notificationRef}>
                            <button
                                className={styles.bellButton}
                                aria-label="Notifications"
                                onClick={() => setNotificationOpen(!notificationOpen)}
                            >
                                <FaBell size={20} className={styles.bellIcon} />
                                {notifications.length > 0 && <span className={styles.badge}></span>}
                            </button>
                            {notificationOpen && (
                                <div className={styles.notificationDropdown}>
                                    <div className={styles.notificationHeader}>Notifications</div>
                                    {notifications.length > 0 ? (
                                        notifications.map((notif) => (
                                            <div key={notif.id} className={styles.notificationItem}>
                                                <p>{notif.message}</p>
                                                <span className={styles.time}>{notif.time}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className={styles.noNotifications}>No new notifications</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={styles.profileWrapper} onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <div className={styles.userAvatarName}>
                                <img src="/images/user.jpg" alt={userName} width={50} height={50} className={styles.avatar} />
                            </div>
                            {dropdownOpen && (
                                <div className={styles.dropdown}>
                                    <p>{userName}</p>
                                    <div className={styles.dropdownMenu}>
                                        <button className={styles.dropdownItem}>
                                            <FaRegUser size={20} />
                                            <span>Profile</span>
                                        </button>
                                        <button className={styles.dropdownItem} onClick={handleAdminLogout}>
                                            <IoMdLogOut size={20} />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </header>
            {
                adminMobileSidebar && (
                    <section className={styles.adminPannelMobileSidebar} ref={sidebarMRef}>
                        <aside className={styles.sideMenu}>
                            <div className={styles.brandSection}>
                                <div className={styles.sidemenuLogo}>
                                    <Link href="/student-dashboard" aria-label="CourseHive Home">
                                        <span>CourseHive</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.dashboardLink}>
                                <Link href="/student-dashboard">
                                    <span >Dashboard</span>
                                </Link>
                            </div>
                            <div>
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
                    </section>
                )
            }

        </>
    )
}

export default StudentpannelHeader;
