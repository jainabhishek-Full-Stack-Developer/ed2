"use client";
import { useState } from "react";
import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper";
import Batchhome from "./Batchhome";
import Curriculumhome from "./Curriculumhome";
import styles from "./page.module.css";
import Personaldetailshome from "./Personaldetailshome";


const Newbookinghome = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { id: 1, label: "Personal Details" },
        { id: 2, label: "Select Curriculum" },
        { id: 3, label: "Dashboard" },
    ];

    const renderStepComponent = () => {
        switch (currentStep) {
            case 1:
                return <Personaldetailshome />;
            case 2:
                return <Curriculumhome />;
            case 3:
                return <Batchhome />;
            default:
                return <Personaldetailshome />;
        }
    };


    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <Mainstudentwrapper>
            <section>

                <div className={styles.newBookingStepContainer}>
                    {steps.map((step, index) => (
                        <div key={step.id} className={styles.stepContainer}>
                            <div
                                className={`${styles.stepCircle} ${currentStep >= step.id ? styles.active : styles.deactive}`}
                            >
                                {step.id}
                            </div>
                            <p className={styles.stepLabel}>{step.label}</p>
                            {index !== steps.length - 1 && <div className={styles.stepLine}></div>}
                        </div>
                    ))}
                </div>


                <div className={styles.stepContent}>
                    {renderStepComponent()}
                </div>

                {
                    (currentStep < 3) ? (

                        <div className={styles.navigationButtons}>
                            <button onClick={handlePrevious} disabled={currentStep === 1}>
                                Previous
                            </button>
                            <button onClick={handleNext} disabled={currentStep === steps.length}>
                                Next
                            </button>
                        </div>
                    ) : null
                }
            </section>
        </Mainstudentwrapper>
    );
};

export default Newbookinghome;
