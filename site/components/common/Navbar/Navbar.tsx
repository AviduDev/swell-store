import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import styles from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean>
      <div className={styles.nav_main}>
        <div className={styles.nav_container}>

          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>

          <nav className={styles.nav_links}>
            <Link href="/search" className={styles.nav_link}>
              <a className={styles.nav_link}>SHOP</a>
            </Link>
            <Link href="/design" className={styles.nav_link}>
              <a className={styles.nav_link}>DESIGN</a>
            </Link>
          </nav>

          <UserNav />
        </div>

        <div className={styles.nav_search}>
          {' '}
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <div>
              <Searchbar />
            </div>
          )}
        </div>

      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
