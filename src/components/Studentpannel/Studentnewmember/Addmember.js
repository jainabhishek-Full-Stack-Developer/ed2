"use client";
import styles from "../../../app/page.module.css";
import localStyles from "./page.module.css";

const Addmember = () => {

  const handleStudentPersonalDetails = (e) => {
    e.preventDefault();
  }


  return (
    <section>
      <div className={localStyles.personalDetailsHomeContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Personal Details</h2>
          <form>
            <div className={styles.formBox}>
              <div className={styles.inputGroup}>
                <label>Parent Name</label>
                <input type="text" placeholder="Parent Name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className={styles.formBox}>
              <div className={styles.inputGroup}>
                <label>Whatsapp Number</label>
                <input type="text" placeholder="Whatsapp Number" />
              </div>
              <div className={styles.inputGroup}>
                <label>City of Residence</label>
                <input type="text" placeholder="City of Residence" />
              </div>
            </div>
            <div className={styles.formBox}>
              <div className={styles.inputGroup}>
                <label>Enrolled Child Name</label>
                <input type="text" placeholder="Enrolled Child Name" />
              </div>
              <div className={styles.inputGroup}>
                <label>DOB</label>
                <input type="date" />
              </div>
            </div>
            <div className={styles.formBox}>
              <div className={styles.inputGroup}>
                <label>School Name</label>
                <input type="text" placeholder="School Name" />
              </div>
              <div className={styles.inputGroup}>
                <label>Time Zone</label>
                <select>
                  <option>--select time zone--</option>
                </select>
              </div>
            </div>
            <div className={styles.formBox}>
              <div className={styles.inputGroup}>
                <label>Relationship</label>
                <select>
                  <option>--select relationship--</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="guardian">Guardian</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Grade</label>
                <select>
                  <option>--select grade--</option>
                  <option value="kg1">KG1</option>
                  <option value="kg2">KG2</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <h2 className={styles.title}>Select Curriculum</h2>
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

export default Addmember
