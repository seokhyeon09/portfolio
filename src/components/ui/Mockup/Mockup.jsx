import React from 'react'
import styles from './Mockup.module.scss'
import { icons } from '../../../utils/icons'

const Mockup = ({ type = 'desktop', imageSrc, fallbackIcon, title }) => {
  
  // Render fallback SVG if image doesn't exist
  const renderScreen = () => {
    if (imageSrc) {
      return <img src={imageSrc} alt={title} className={styles.screenImage} />
    }
    
    // Check if the requested fallback icon exists in our icons map
    const IconComponent = icons[fallbackIcon]
    if (IconComponent) {
      return (
        <div className={styles.fallback}>
          <IconComponent className={styles.icon} />
          <span className={styles.title}>{title}</span>
        </div>
      )
    }
    
    return <span className={styles.title}>{title}</span>
  }

  // Render different device wrappers based on the type
  if (type === 'mobile') {
    return (
      <div className={`${styles.mockup} ${styles.mobile}`}>
        <div className={styles.notch}></div>
        <div className={styles.screen}>
          {renderScreen()}
        </div>
      </div>
    )
  }

  if (type === 'tablet') {
    return (
      <div className={`${styles.mockup} ${styles.tablet}`}>
        <div className={styles.camera}></div>
        <div className={styles.screen}>
          {renderScreen()}
        </div>
      </div>
    )
  }

  // Default to desktop
  return (
    <div className={`${styles.mockup} ${styles.desktop}`}>
      <div className={styles.screen}>
        {renderScreen()}
      </div>
      <div className={styles.base}></div>
    </div>
  )
}

export default Mockup
