import Head from 'next/head'
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
              <form action="" method="get">
                <label htmlFor="">
                  Your Name:
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </label>
                <br />
                <label htmlFor="">
                  Your E-mail:
                  <input
                    type="email"
                    name="E-mail"
                    id="email"
                    placeholder="E-mail"
                  />
                </label>
                <br />
                <label htmlFor="">
                  Your File:
                  <input type="file" name="" id="" />
                </label>
                <br />
                <label htmlFor="">
                  Additional Info:
                  <textarea
                    className={styles.ta}
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Add Your Addition Details Here"
                  ></textarea>
                </label>
                <br />
                <button>
                  <input type="submit" value="Submit" />
                </button>
              </form>
            </div>
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
            <div>
              <form action="" method="get">
                <label htmlFor="">
                  Your Name:
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </label>
                <br />
                <label htmlFor="">
                  Your E-mail:
                  <input
                    type="email"
                    name="E-mail"
                    id="email"
                    placeholder="E-mail"
                  />
                </label>
                <br />
                <label htmlFor="">
                  Your File:
                  <input type="file" name="" id="" />
                </label>
                <br />
                <label htmlFor="">
                  Additional Info:
                  <textarea
                    className={styles.ta}
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Add Your Addition Details Here"
                  ></textarea>
                </label>
                <br />
                <button>
                  <input type="submit" value="Submit" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
