"use client";
import { useState } from 'react';
import styles from './page.module.css'; // Importing the CSS module
import Studentpannelmodal from '../Studentpannel/Studentpannelmodal/Studentpannelmodal';
import Referearnhome from './Referearnhome';


const Refercard = () => {
    const [referralCode] = useState('EDUKIDS123'); // Example referral code
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section>
                <div className={styles.cardContainer}>
                    <img
                        src="/images/refer.png"
                        alt="Refer and Earn"
                        className={styles.referImage}
                    />
                    <div className={styles.cardContent}>
                        <p className={styles.cardText}>
                            Refer your friends to <strong>EduKids</strong> and claim your <span style={{ color: 'var(--main-color)', fontWeight: 'bold' }}>$50 reward</span>! 🎉
                            Earn exciting rewards for every successful referral. Don’t miss out—start sharing today!
                        </p>
                        <button className={styles.referButton} onClick={() => setOpenModal(true)}>Claim Your $50</button>
                        <p className={styles.termsText}>*Terms and conditions apply.</p>
                    </div>
                </div>

            </section>
            <Studentpannelmodal setOpenModal={setOpenModal} openModal={openModal}>
                <Referearnhome />
            </Studentpannelmodal>
        </>

    );
};

export default Refercard;
