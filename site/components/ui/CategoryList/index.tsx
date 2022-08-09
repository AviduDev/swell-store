import React from 'react'
import Link from '../Link'
import Image from 'next/image'
import styles from './CategoryList.module.css'

const CategoryList = () => {
  return (
    <div>
      <div>
        <div className={styles.cata_img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/agus-2Q9LhYgdgmc-unsplash_mysg1b.jpg"
            height="500"
            width="500"
            layout='fill'
            alt="EVENTS"
          ></Image>
        </div>
        <div>
          <Link href="/search/events">
            <button>EVENTS</button>
          </Link>
        </div>
      </div>

      <div>
        <div className={styles.cata_img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/dmitry-yachmenev-WiUZePwVlaU-unsplash_xf2sbh.jpg"
            height="500"
            width="500"
            layout='fill'
            alt="EVENTS"
          ></Image>
        </div>
        <div>
          <Link href="/search/funny">
            <button>FUNNY</button>
          </Link>
        </div>
      </div>

      <div>
        <div className={styles.cata_img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1656007955/test%20image/malik-skydsgaard-apRsHreBv7s-unsplash_p1eruv.jpg"
            height="500"
            width="500"
            layout='fill'
            alt="EVENTS"
          ></Image>
        </div>
        <div>
          <Link href="/search/pets">
            <button>PETS</button>
          </Link>
        </div>
      </div>

      <div>
        <div className={styles.cata_img}>
          <Image
            src="https://res.cloudinary.com/avidu/image/upload/v1656007954/test%20image/malik-skydsgaard-E2am-KuAZ9k-unsplash_ruxa1d.jpg"
            // height="500"
            // width="500"
            layout='fill'
            alt="EVENTS"
          ></Image>
        </div>
        <div>
          <Link href="/search/graphics">
            <button>GRAPHICS</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default CategoryList
