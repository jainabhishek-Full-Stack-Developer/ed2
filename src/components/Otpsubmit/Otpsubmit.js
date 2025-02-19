"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import Logo from "@/components/Logo/Logo";

const Otpsubmit = () => {
  const otpInputFeild1 = useRef();
  const otpInputFeild2 = useRef();
  const otpInputFeild3 = useRef();
  const otpInputFeild4 = useRef();
  const [inputFeild1, setInputFeild1] = useState('');
  const [inputFeild2, setInputFeild2] = useState('');
  const [inputFeild3, setInputFeild3] = useState('');
  const [inputFeild4, setInputFeild4] = useState('');
  const [count, setCount] = useState(60);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval)
      }
      else {
        setCount(count - 1)
      }
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [count]);


  const handleOtpValidate = () => {
    const otp = '1234';
    const userOtp = inputFeild1 + inputFeild2 + inputFeild3 + inputFeild4;
    if (otp === userOtp) {

      router.push('/reset-password');
      const interval = setInterval(() => {
        if (count === 0) {
          clearInterval(interval)
        }
        else {
          setCount(count - 1)
        }
      }, 1000);
      return () => {
        clearInterval(interval)
      }
    }
    else {
      alert('Invalid OTP');
    }
  }

  return (
    <section>
      <div className={styles.loginStudentWrapper}>
        <Logo />
        <h1 className={styles.loginStudentWelcomeTitle}>OTP Verification</h1>
        <p className={styles.loginStudentWelcomeText}>Enter the code from the email we sent to your registered Email Id</p>
        <div className={styles.loginStudentFormContainer}>
          <div className={styles.loginStudentOtpCard}>
            <form>
              <div className={styles.loginStudentOtpInputContainer}>
                <div className={styles.loginStudentOtpFormConatiner}>
                  <input type="number"
                    ref={otpInputFeild1}
                    maxLength={1}
                    value={inputFeild1}
                    autoFocus={true}
                    onChange={e => {
                      setInputFeild1(e.target.value)
                      if (e.target.value.length >= 1) {
                        otpInputFeild2.current.focus();
                      }
                    }} />
                </div>
                <div className={styles.loginStudentOtpFormConatiner}>
                  <input type="number"
                    ref={otpInputFeild2}
                    maxLength={1}
                    value={inputFeild2}
                    onChange={e => {
                      setInputFeild2(e.target.value)
                      if (e.target.value.length >= 1) {
                        otpInputFeild3.current.focus();
                      }
                      if (e.target.value.length < 1) {
                        otpInputFeild1.current.focus();
                      }
                    }}
                  />
                </div>
                <div className={styles.loginStudentOtpFormConatiner}>
                  <input type="number"
                    ref={otpInputFeild3}
                    maxLength={1}
                    value={inputFeild3}
                    onChange={e => {
                      setInputFeild3(e.target.value)
                      if (e.target.value.length >= 1) {
                        otpInputFeild4.current.focus();
                      }
                      if (e.target.value.length < 1) {
                        otpInputFeild2.current.focus();
                      }
                    }}
                  />
                </div>
                <div className={styles.loginStudentOtpFormConatiner}>
                  <input type="number"
                    ref={otpInputFeild4}
                    maxLength={1}
                    value={inputFeild4}
                    onChange={e => {
                      setInputFeild4(e.target.value)
                      if (e.target.value.length >= 1) {
                        otpInputFeild4.current.focus();
                      }
                      if (e.target.value.length < 1) {
                        otpInputFeild3.current.focus();
                      }
                    }}
                  />
                </div>
              </div>
              <div className={styles.otpCount}>
                {
                  (count !== 0) && <p className="text-danger">{`00:${count}`}</p>
                }
              </div>
              <div className={styles.loginStudentBtn}>
                <button type="button" onClick={handleOtpValidate} disabled={inputFeild1 !== '' && inputFeild2 !== '' && inputFeild3 !== '' && inputFeild4 !== '' ? false : true}>Submit</button>
              </div>
            </form>
            <div className={styles.loginStudentOtpResend}>
              <div>
                <span >Don’t receive the OTP?</span>
              </div>
              <div>
                <button type="button" className={count === 0 ? styles.loginStudentResendBtn : styles.loginStudentDisabledResend} to="/signup" onClick={() => setCount(60)} disabled={count > 0 ? true : false}>RESEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Otpsubmit;
