"use client"
import Studentpannelwrapper from '../Studentpannelwrapper/Studentpannelwrapper';
import StudentpanneldashboardCard from '../StudentpanneldashboardCard/StudentpanneldashboardCard';
import { FaBook, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import styles from "./page.module.css";
import Link from 'next/link';

const enrolledCourses = [
    {
        id: 'fa8dbdc7-26d1-42e5-ae6a-2bc4dd8b9500',
        name: "Mathematics",
        instructor: "Dr. John Doe",
        schedule: "Mon & Wed - 10:00 AM",
        progress: "75%",
    },
    {
        id: '5a099557-d847-4453-b537-52da2118a327',
        name: "Physics",
        instructor: "Prof. Jane Smith",
        schedule: "Tue & Thu - 2:00 PM",
        progress: "60%",
    },
    {
        id: '583a2739-d688-4497-8792-36b29f5a4f12',
        name: "History",
        instructor: "Dr. Alan Brown",
        schedule: "Fri - 4:30 PM",
        progress: "90%",
    },
];

const Studentcourseshome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Enrolled Courses">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <StudentpanneldashboardCard
                    title="Total Enrolled Courses"
                    value={enrolledCourses.length}
                    icon={<FaBook size={25} />}
                    bgcolor="#fdfa72"
                    iconColor="#8B8000"
                />
                <StudentpanneldashboardCard
                    title="Upcoming Classes Today"
                    value={2} // Can be dynamically set based on schedule
                    icon={<FaClock size={25} />}
                    bgcolor="#98FB98"
                    iconColor="#006400"
                />
            </div>

            {/* Enrolled Courses List */}
            <div className={styles.courseList}>
                {enrolledCourses.map((course) => (
                    <Link href={`/enroll-course-details/enrollid=${course.id}`} key={course.id}>
                        <div  className={styles.courseCard}>
                            <h3>{course.name}</h3>
                            <p><FaChalkboardTeacher /> Instructor: {course.instructor}</p>
                            <p><FaClock /> Schedule: {course.schedule}</p>
                            <p>Progress: {course.progress}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Studentpannelwrapper>
    );
};

export default Studentcourseshome;
