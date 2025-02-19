"use client";
import Logo from "@/components/Logo/Logo";
import styles from "./page.module.css";
import { useState } from "react";

const Forgetpasswordcontent = () => {
    const [forgetStudentEmail, setForgetStudentEmail] = useState('');

    const handleForgetStudentLogin = (e) => {
        e.preventDefault();
        if (forgetStudentEmail !== '') {

        }
        else {

        }
    }

    return (
        <section>
            <div className={styles.forgetStudentWrapper}>
                <Logo />
                <h1 className={styles.forgetStudentWelcomeTitle}>Forgot Your Password?</h1>
                <p className={styles.forgetStudentWelcomeText}>Enter your email to receive an OTP to reset your password</p>
                <form>
                    <div className={styles.forgetStudentInputContainer}>
                        <input type="text" className={styles.forgetStudentInputField} placeholder="Email address" onChange={(e) => setForgetStudentEmail(e.target.value)} />
                    </div>
                    <div className={styles.forgetStudentBtn} onClick={handleForgetStudentLogin}>
                        <button type="submit">Forget Password</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Forgetpasswordcontent
