import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import cn from 'clsx'
import Button from '../Button'

const Hero = () => {
  return (
    <div>
      <div>
        <h1 className={styles.hero_h1}>
          BUY <br />
          DESIGN <br />
          YOUR <br />
          OWN <br />
          TEE
        </h1>
      </div>
      <div>
        <Link href="/search">
          <button className={styles.hero_btn}>SHOP</button>
        </Link>
        <Link href="/search">
          <button className={styles.hero_btn}>DESIGN</button>
        </Link>
      </div>
      <div>
        <h2 className={styles.hero_h2}>This is where you can buy t-shirts with pre made design or design your own t-shirt with us.</h2>
      </div>
    </div>
  )
}

export default Hero
