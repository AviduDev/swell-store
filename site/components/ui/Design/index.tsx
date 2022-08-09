import React from 'react'
import Button from '@components/ui/Button'
import Link from 'next/link'
import styles from './Design.module.css'

const Design = () => {
  return (
    <div>
      <div>
        <h1 className={styles.des_h1}>HAVE A IDEA?</h1>
        <div className={styles.des_p}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            harum!
          </p>
        </div>
        <Link href="/">
          <button className={styles.des_btn}>TELL US</button>
        </Link>
      </div>
      <div>
        <h1 className={styles.des_h1}>HAVE A DESIGN?</h1>
        <div className={styles.des_p}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            harum!
          </p>
        </div>
        <Link href="/">
          <button className={styles.des_btn}>UPLOAD</button>
        </Link>
      </div>
    </div>
  )
}

export default Design
