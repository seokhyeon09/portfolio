import React from 'react';
import styles from './Contact.module.scss';
import ContactHeader from '../components/sections/Contact/ContactHeader';
import ContactMarquee from '../components/sections/Contact/ContactMarquee';
import ContactForm from '../components/sections/Contact/ContactForm';
import ContactInfo from '../components/sections/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <section className={styles.container}>
        <ContactHeader />
      </section>

      <ContactMarquee />

      <section className={styles.container}>
        <div className={styles.contentGrid}>
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
};

export default Contact;