"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./page.module.css";
import 'swiper/css/autoplay';
import "./page.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";


const TestimonialCard = ({ name, desc, title }) => {
    return (
        <>
            <div className={styles.testimonialContainer}>
                <div className={styles.testimonialContent}>
                    <img src="/images/user.jpg" alt={name} />
                    <h4 className={styles.testimonialTitle}>{title}</h4>
                    <p className={styles.testimonialText}>
                        <FaQuoteLeft className={styles.testimonialIconLeft} />
                        {desc}
                        <FaQuoteRight className={styles.testimonialIconRight} />
                    </p>
                    <ul>
                        <li><IoIosStar size={25} className={styles.starIcon} /></li>
                        <li><IoIosStar size={25} className={styles.starIcon} /></li>
                        <li><IoIosStar size={25} className={styles.starIcon} /></li>
                        <li><IoIosStar size={25} className={styles.starIcon} /></li>
                        <li><IoIosStar size={25} className={styles.starIcon} /></li>
                    </ul>
                    <span className={styles.testimonialAuthor}>{name}</span>
                </div>
            </div>
        </>
    )
}


const Testimonial = () => {
    return (
        <>
            <section className={styles.testimonialBgContainer}>
                <div>
                    <h1 className={styles.testimonialHeading}>Parents Trust Us</h1>
                    <p className={styles.testimonialText}>Parents trust us for our engaging and effective learning, making education interactive and impactful for their children’s growth. </p>
                </div>
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className={styles.mySwiper}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // 3-second delay
                >
                    <SwiperSlide><TestimonialCard title="Best decision I ever made!" desc="I took the Digital Marketing course, and within three months, I started my own successful freelance business. The lessons were practical, engaging, and incredibly valuable!" name="Sophia Williams, USA" /></SwiperSlide>
                    <SwiperSlide><TestimonialCard title="CourseHive changed my life!" desc="Before joining CourseHive, I struggled to find quality online courses. The hands-on projects and expert mentorship helped me land my dream job as a Software Developer!" name="Amit Sharma, India" /></SwiperSlide>
                    <SwiperSlide><TestimonialCard title="Top-notch education at my fingertips!" desc="The flexibility and high-quality content make CourseHive my favorite learning platform. I love how I can learn at my own pace and still get expert support." name="Rahul Patel, UK" /></SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Testimonial;
