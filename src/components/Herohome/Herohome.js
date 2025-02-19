'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './page.module.css';

const slides = [
    {
        image: '/images/carousel-1.jpg',
        title: 'Learn from the Best, Anytime, Anywhere',
        text: 'Access high-quality courses and start your learning journey today.',
    },
    {
        image: '/images/carousel-2.jpg',
        title: 'Boost Your Skills with Expert Guidance',
        text: 'Learn from industry leaders and improve your career prospects.',
    },
    {
        image: '/images/carousel-1.jpg',
        title: 'Flexible Learning for Everyone',
        text: 'Study at your own pace with a variety of online courses.',
    }
];

const Herohome = () => {
    return (
        <div className={styles.heroContainer}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                className={styles.heroSwiper}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={styles.slide}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className={styles.heroContent}>
                                <h1 className={styles.heroTitle}>{slide.title}</h1>
                                <p className={styles.heroText}>{slide.text}</p>
                                <div className={styles.heroButtons}>
                                    <Link href="/courses" className={styles.exploreBtn}>
                                        Explore Courses
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
           
        </div>
    );
};

export default Herohome;
