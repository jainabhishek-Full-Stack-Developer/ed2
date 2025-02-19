"use client";
import { useState } from "react";
import { FaCopy, FaShareAlt } from "react-icons/fa"; // Using React Icons
import styles from "./page.module.css";

const Referearnhome = () => {
    const referralCode = "ABC123XYZ";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
       
            <div className={styles.container}>
                <h2 className={styles.title}>Refer & Earn Rewards 🎉</h2>
                <p className={styles.description}>
                    Invite your friends and earn rewards! Share your referral code, and get ₹100 when they sign up.
                </p>

                {/* Referral Code Box */}
                <div className={styles.referralBox}>
                    <span className={styles.referralCode}>{referralCode}</span>
                    <button className={styles.copyButton} onClick={handleCopy}>
                        {copied ? "Copied!" : <><FaCopy /> Copy</>}
                    </button>
                </div>

                <p className={styles.benefits}>
                    💰 <b>Earn ₹100</b> for each friend who joins!  
                    🎁 <b>Your friend gets ₹50</b> on signup!
                </p>

                {/* Share Button */}
                <button className={styles.shareButton}>
                    <FaShareAlt /> Share Now
                </button>
            </div>
    );
};

export default Referearnhome;
