import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { icons } from '../../../utils/icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: '협업 제안',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h3>메시지 보내기</h3>
        <p>폼을 작성하시면 이메일로 빠르게 답장 드릴게요.</p>
      </div>
      
      <form 
        className={styles.form} 
        action="https://formspree.io/f/YOUR_FORM_ID_HERE" 
        method="POST"
      >
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="name">이름 <span className={styles.required}>*</span></label>
            <div className={styles.inputWrapper}>
              <icons.user size={18} className={styles.icon} />
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">이메일 <span className={styles.required}>*</span></label>
            <div className={styles.inputWrapper}>
              <icons.mail size={18} className={styles.icon} />
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">제목</label>
          <div className={styles.inputWrapper}>
            <icons.code size={18} className={styles.icon} />
            <input 
              type="text" 
              id="subject" 
              name="subject"
              placeholder="프로젝트 협업 제안드립니다"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="type">문의 유형</label>
          <div className={styles.inputWrapper}>
            <icons.layout size={18} className={styles.icon} />
            <select 
              id="type" 
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="협업 제안">협업 제안</option>
              <option value="프로젝트 의뢰">프로젝트 의뢰</option>
              <option value="기술 자문">기술 자문</option>
              <option value="기타">기타</option>
            </select>
            <div className={styles.selectIcon}>▼</div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">메시지</label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              name="message"
              placeholder="안녕하세요, 정석현님!&#10;&#10;함께 진행하고 싶은 프로젝트가 있어서 연락드렸습니다..."
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
            ></textarea>
          </div>
          <div className={styles.charCount}>
            {formData.message.length} / 500자
          </div>
        </div>

        <div className={styles.formFooter}>
          <div className={styles.privacyInfo}>
            <icons.checkCircle size={16} />
            <span>개인정보는 안전하게 보호됩니다</span>
          </div>
          <button type="submit" className={styles.submitBtn}>
            <icons.send size={18} />
            메시지 전송
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
