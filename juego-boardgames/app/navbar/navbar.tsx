import Link from 'next/link'
import React from 'react'
import classes from './navbar.module.css';

export default function Navbar() {
  return (
        <nav className={classes.title}>
            <Link  href="/">ACCUEIL</Link>
            <Link href="/discover-us">NOUS DECOUVRIR</Link>
            <Link href="/contact">CONTACT</Link>
        </nav>
  )
}
