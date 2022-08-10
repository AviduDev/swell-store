import styles from '../../styles/about.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <div>
        <h1>About us</h1>
      </div>
      <div>
        <h1>OUR MISSION</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          officiis possimus exercitationem nobis, impedit voluptate eaque?
          Recusandae totam officia quidem!
        </p>
      </div>
      <div>
        <h1>OUR VISION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
          voluptas provident blanditiis ducimus! Blanditiis eligendi explicabo
          odio consequuntur temporibus.
        </p>
      </div>
      <div>
        <h1>OUR VALUES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nam
          minima magnam architecto enim asperiores quam porro, laborum unde eos.
        </p>
      </div>
      <div>
        <h1>OUR TEAM</h1>
        <div>
          <div>
            <div className={styles.team}>
              <Image
                src="https://res.cloudinary.com/avidu/image/upload/v1656003938/cld-sample.jpg"
                width="350"
                height="350"
                layout="fill"
                alt="Avidu"
              ></Image>
            </div>
            <h3>Sampath</h3>
          </div>
          <div>
            <div className={styles.team}>
              <Image
                src="https://res.cloudinary.com/avidu/image/upload/v1656003938/cld-sample.jpg"
                width="350"
                height="350"
                layout="fill"
                alt="Avidu"
              ></Image>
            </div>
            <h3>Avidu</h3>
          </div>

          <div>
            <div className={styles.team}>
              <Image
                src="https://res.cloudinary.com/avidu/image/upload/v1656003938/cld-sample.jpg"
                width="350"
                height="350"
                layout="fill"
                alt="Avidu"
              ></Image>
            </div>
            <h3>Bandara</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
