"use client";
import Logo from "@/components/Logo/Logo";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from 'next/navigation';


const Newpasswordcontent = () => {
    const [studentNPassword, setStudentNPassword] = useState('');
    const [studentCPassword, setStudentCPassword] = useState('');
    const router = useRouter();
    const handleStudentNPassword = (e) => {
        e.preventDefault();
        if (studentNPassword !== '' && studentCPassword !== '') {
            router.push('/sign-in');
        }
        else {

        }
    }

    return (
        <section>
            <div className={styles.resetPassStudentWrapper}>
                <Logo />
                <h1 className={styles.resetPassStudentWelcomeTitle}>Set Your New Password</h1>
                <p className={styles.resetPassStudentWelcomeText}>Create a new password to regain access to your course</p>
                <form>
                    <div className={styles.resetPassStudentInputContainer}>
                        <input type="password" className={styles.resetPassStudentInputField} placeholder="New Password" onChange={(e) => setStudentNPassword(e.target.value)} />
                    </div>
                    <div className={styles.resetPassStudentInputContainer}>
                        <input type="password" className={styles.resetPassStudentInputField} placeholder="Confirm Password" onChange={(e) => setStudentCPassword(e.target.value)} />
                    </div>
                    <div className={styles.resetPassStudentBtn} onClick={handleStudentNPassword}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Newpasswordcontent;
