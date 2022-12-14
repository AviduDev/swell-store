import React from 'react'
import Button from '@components/ui/Button'
import Link from 'next/link'
import styles from './Design.module.css'

const Design = () => {
  return (
    <div>
      <div className={styles.des_card}>
        <h2 className={styles.des_h1}>HAVE A IDEA?</h2>
        <div className={styles.des_p}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi
            ullam quia. Ratione blanditiis quia illo culpa alias, natus fugit.
          </p>
        </div>
        <Link href="design">
          <button className={styles.des_btn}>TELL US</button>
        </Link>
      </div>
      <div className={styles.des_card}>
        <h2 className={styles.des_h1}>HAVE A DESIGN?</h2>
        <div className={styles.des_p}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi
            reiciendis repellat esse minus, molestiae quia minima nostrum fugiat
            aliquam.
          </p>
        </div>
        <Link href="design">
          <button className={styles.des_btn}>UPLOAD</button>
        </Link>
      </div>
    </div>
  )
}

export default Design
