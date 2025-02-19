"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import Logo from "@/components/Logo/Logo";
import { useRouter } from "next/navigation";


const Logincontent = () => {
    const [studentEmail, setStudentEmail] = useState('demo@gmail.com');
    const [studentPassword, setStudentPassword] = useState('demo@#456');
    const router = useRouter();

    const handleStudentLogin = (e) => {
        e.preventDefault();

        if (studentEmail !== '' && studentPassword !== '') {
            // Simulate accessToken (in real cases, get it from API response)
            const accessToken = "ey614d5131a94d43b783d297c2e17c94a2614d5131a94d43b783d297c2e17c94a2"; // Replace with actual token

            // Set accessToken in sessionStorage
            sessionStorage.setItem("accessToken", accessToken);

            // Redirect to new booking page
            router.push('/new-booking');
        } else {
            alert("Please enter both email and password.");
        }
    };


    return (
        <section>
            <div className={styles.loginStudentWrapper}>
                <Logo />
                <h1 className={styles.loginStudentWelcomeTitle}>Welcome Back!</h1>
                <p className={styles.loginStudentWelcomeText}>Sign in to access your courses</p>
                <form>
                    <div className={styles.loginStudentInputContainer}>
                        <input type="text" className={styles.loginStudentInputField} defaultValue={studentEmail} placeholder="Email address" onChange={(e) => setStudentEmail(e.target.value)} />
                    </div>
                    <div className={styles.loginStudentInputContainer}>
                        <input type="password" className={styles.loginStudentInputField} defaultValue={studentPassword} placeholder="Password" onChange={(e) => setStudentPassword(e.target.value)} />
                    </div>
                    <div className={styles.loginStudentForgetPassword}>
                        <Link href="/forget-password">Forget Password?</Link>
                    </div>
                    <div className={styles.loginStudentBtn} onClick={handleStudentLogin}>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
                <p className={styles.loginStudentSignupText}>Don't have an account? <Link href="/sign-up" className={styles.loginStudentSignupLink}>Sign Up</Link></p>
            </div>
        </section>
    )
}

export default Logincontent;
