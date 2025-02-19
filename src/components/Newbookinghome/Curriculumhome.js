import styles from '../../app/page.module.css';
import localStyles from "./page.module.css";


const Curriculumhome = () => {
    const handleStudentPersonalDetails = (e) => {
        e.preventDefault();
    }



    return (
        <section>
            <div className={localStyles.personalDetailsHomeContainer}>
                <div className={styles.formContainer}>
                    <h2 className={styles.title}>Select Curriculum</h2>
                    <form>
                        <div className={styles.formBox}>
                            <div className={styles.inputGroup}>
                                <label>Course</label>
                                <select>
                                    <option>--select course--</option>
                                    <option value="father">Little Yogi- Gita for kids</option>
                                    <option value="mother">Little Yogi- Gita for kids </option>
                                    <option value="guardian">Little Yogi- Gita for kids </option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Recommended Curriculum</label>
                                <select>
                                    <option>--select recommended curriculum--</option>
                                    <option value="father">Little Yogi- Gita for kids (4-6 yrs)</option>
                                    <option value="mother">Little Yogi- Gita for kids (7-9 yrs)</option>
                                    <option value="guardian">Little Yogi- Gita for kids (10+ yrs)</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formBox}>
                            <div className={styles.inputGroup}>
                                <label>Batch Type</label>
                                <select>
                                    <option>--select batch type--</option>
                                    <option value="father">1:1 (private 45mins)</option>
                                    <option value="father">1:6 (group 45mins)</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.submitBtn}>
                            <button type="submit" onClick={handleStudentPersonalDetails}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Curriculumhome;
