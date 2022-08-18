import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
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
      <div className={s.nav}>
        <div>
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className={s.navMenu}>
            <Link href="/search">
              <a className={s.link}>SHOP</a>
            </Link>
            <Link href="/design">
              <a>DESIGN</a>
            </Link>
          </nav>
        </div>
        <div>
          <UserNav />
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div>
            <Searchbar />
          </div>
        )}
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
