import Link from "next/link";
import Coursecard from "../Coursecard/Coursecard";
import styles from "./page.module.css";
import { generateSlug } from "@/utils/utils";

const courses = [
    {
        image: "/images/c1.jpg",
        title: "Little Yogi- Gita for kids (4-6 yrs)",
        type: "easy"

    },
    {
        image: "/images/c2.jpg",
        title: "Little Yogi- Gita for kids (7-9 yrs)",
        type: "medium"
    },
    {
        image: "/images/c1.jpg",
        title: "Little Yogi- Gita for kids (10+ yrs)",
        type: "Hard"
    }
];






const Coursescontent = () => {
    return (
        <section>
            <div>
                <h1 className={styles.coursesHeading}>Enhance Skills, Advance</h1>
                <p className={styles.coursesText}>
                    Gain industry-relevant skills through hands-on projects and expert mentorship.
                    Advance your career with practical knowledge designed for real-world success.
                </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "40px" }}>
                {courses.map((course, index) => (
                    <Link key={index} href={`course/${generateSlug(course.title)}`}>
                        <Coursecard key={index} {...course} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Coursescontent;
