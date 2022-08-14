import Head from 'next/head'
import ContactForm from '@components/ui/contactForm/contactForm'
import Link from 'next/link'
import styles from '../../styles/design.module.css'


export default function Design() {
  return (
    <div>
      <Head>
        <title>Design | Design Custom T-Shirt</title>
      </Head>
      <main>
        <h1>Custom Design</h1>
        <div>
          <div>
            <h1 className={styles.des_h1}>HAVE A IDEA?</h1>
            <div className={styles.des_p}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                quasi ullam quia. Ratione blanditiis quia illo culpa alias,
                natus fugit.
              </p>
            </div>

            <div>
              <h1 className={styles.des_h1}>HAVE A DESIGN?</h1>
              <div className={styles.des_p}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quasi reiciendis repellat esse minus, molestiae quia minima
                  nostrum fugiat aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div><ContactForm /></div>
      </main>
    </div>
  )
}
