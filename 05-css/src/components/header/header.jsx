import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
     <h3 className={styles.logo}>Manpreet</h3>
      <button>Login</button>
      </div>
  )
}

export default Header
