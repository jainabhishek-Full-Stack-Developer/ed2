import styles from "./page.module.css";

const TypeBadge = ({ type }) => {
    return <span className={`${styles.badge} ${styles[type.toLowerCase()]}`}>{type}</span>;
};

const CourseCard = ({ image, title, type }) => {
    return (
        <div className={styles.courseCard}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.courseImage} />
                <TypeBadge type={type} />
            </div>
            <div className={styles.cardContent}>
                <h4 className={styles.courseTitle}>{title}</h4>
            </div>
        </div>
    );
};

export default CourseCard;
