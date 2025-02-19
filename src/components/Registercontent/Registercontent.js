"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import Logo from "@/components/Logo/Logo";



const Registercontent = () => {
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [studentPassword, setStudentPassword] = useState('');

    const handleStudentLogin = (e) => {
        e.preventDefault();
        if (studentName !== '' && studentEmail !== '' && studentPassword !== '') {

        }
        else {

        }

    }
    return (
        <section>
            <div className={styles.registerStudentWrapper}>
                <Logo/>
                <h1 className={styles.registerStudentWelcomeTitle}>Create Your Account</h1>
                <p className={styles.registerStudentWelcomeText}>Sign up to start your learning journey</p>
                <form>
                    <div className={styles.registerStudentInputContainer}>
                        <input type="text" className={styles.registerStudentInputField} placeholder="Full Name" onChange={(e) => setStudentName(e.target.value)} />
                    </div>
                    <div className={styles.registerStudentInputContainer}>
                        <input type="text" className={styles.registerStudentInputField} placeholder="Email address" onChange={(e) => setStudentEmail(e.target.value)} />
                    </div>
                    <div className={styles.registerStudentInputContainer}>
                        <input type="password" className={styles.registerStudentInputField} placeholder="Password" onChange={(e) => setStudentPassword(e.target.value)} />
                    </div>
                    <div className={styles.registerStudentBtn} onClick={handleStudentLogin}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <p className={styles.registerStudentSignupText}>Already have an account? <Link href="/sign-in" className={styles.registerStudentSignupLink}>Sign In</Link></p>
            </div>
        </section>
    )
}

export default Registercontent;
