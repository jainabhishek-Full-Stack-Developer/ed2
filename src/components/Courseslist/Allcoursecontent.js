import Link from "next/link";
import Coursecard from "../Coursecard/Coursecard";
import styles from "./page.module.css";
import { generateSlug } from "@/utils/utils";
const courses = [
    { image: "/images/c1.jpg", title: "Introduction to Gita for Kids", type: "easy" },
    { image: "/images/c2.jpg", title: "Krishna's Teachings for Beginners", type: "easy" },
    { image: "/images/c1.jpg", title: "Understanding Dharma (7-9 yrs)", type: "medium" },
    { image: "/images/c2.jpg", title: "Karma Yoga Basics", type: "medium" },
    { image: "/images/c1.jpg", title: "Bhakti Yoga for Kids", type: "easy" },
    { image: "/images/c2.jpg", title: "Path to Moksha (10+ yrs)", type: "hard" },
    { image: "/images/c1.jpg", title: "Understanding Krishna's Words", type: "medium" },
    { image: "/images/c2.jpg", title: "Soul and the Eternal Journey", type: "hard" },
    
];






const Allcoursecontent = () => {
    return (
        <section>
            <div>
                <h1 className={styles.coursesHeading}>Enhance Skills, Advance</h1>
                <p className={styles.coursesText}>
                    Gain industry-relevant skills through hands-on projects and expert mentorship.
                    Advance your career with practical knowledge designed for real-world success.
                </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", gap: "20px", margin:"20px",padding: "40px 0px" }}>
                {courses.map((course, index) => (
                    <Link key={index} href={`course/${generateSlug(course.title)}`}>
                        <Coursecard key={index} {...course} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Allcoursecontent
