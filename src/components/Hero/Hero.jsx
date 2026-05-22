import React from 'react';
import styles from './Hero.module.scss';
import { motion as Motion } from 'framer-motion';
import Stats from '../Stats/Stats';
import { contentVariants, itemVariants, visualVariants } from '../../utils/aniValue';

const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-heading">
            <div className={`inner ${styles.inner}`}>
                <Motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.3 }}
                    className={styles.content}
                >
                    <Motion.span
                        variants={itemVariants}
                        className="badge badge__green"
                    >
                        Open to work
                    </Motion.span>
                    <Motion.h1
                        id="hero-heading"
                        variants={itemVariants}
                        className="tit"
                    >
                        질문을 던지고 코드로 답을 찾는 개발자, 정석현 입니다.
                    </Motion.h1>
                    <Motion.p
                        variants={itemVariants}
                        className="txt"
                    >
                        보이는 곳의 깔끔한 디자인(SCSS)부터{"\n"}
                        보이지 않는 곳의 효율적인 로직까지, 끈질기게 파고들어 문제를 해결합니다
                    </Motion.p>
                    <Motion.div
                        variants={itemVariants}
                        className={styles.cta}
                    >
                        <button type="button" className="btn btn__primary">
                            View project
                        </button>
                        <button type="button" className="btn btn__outline">
                            Get in touch
                        </button>
                    </Motion.div>
                    <Motion.div variants={itemVariants}>
                        <Stats />
                    </Motion.div>
                </Motion.div>

                <Motion.div
                    variants={visualVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className={styles.visual}
                >
                    <div className={styles.imageFrame}>
                        <div className={styles.avatar}>SH</div>
                        <h2 className={styles.name}>Jeong Seck Hyeon</h2>
                        <p className={styles.role}>Frontend Developer & UI Designer</p>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;