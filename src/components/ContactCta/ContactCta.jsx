import React from 'react'
import styles from './ContactCta.module.scss'
const ContactCta = () => {
  return (
    <section className={styles.cta_section}
    aria-labelledby='cta-heading'
    >
        <div className={`inner ${styles.inner}`}>
            <h1 className='tit tit__m'>
                  Ready to build something amazing together?
            </h1>
            <p className="txt">
                  언제든 환영합니다! 아래 편하신 방법으로 연락해 주세요.
            </p>
            <div className={styles.cta}>
                <a className='btn btn__primary btn__small' href="mailto:ring4392@gmail.com">
                    이메일
                </a>
                  <a className='btn  btn__small btn__ghost' href="#" target="_blank" rel="noreferrer">
                    노션
                </a>
                  <a className='btn  btn__small btn__ghost' href="https://github.com/seokhyeon09" target="_blank" rel="noreferrer">
                    깃허브
                </a>
            </div>
        </div>
    </section>
  )
}

export default ContactCta