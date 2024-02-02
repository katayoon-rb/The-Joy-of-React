'use client'
import React from 'react'
import clsx from 'clsx'
import Cookie from 'js-cookie'
import { Rss, Sun, Moon } from 'react-feather'

import Logo from '@/components/Logo'
import VisuallyHidden from '@/components/VisuallyHidden'
import { LIGHT_TOKENS, DARK_TOKENS, COLOR_THEME_COOKIE_NAME } from '@/constants'

import styles from './Header.module.css'


function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme)

  function handleToggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    Cookie.set(
      COLOR_THEME_COOKIE_NAME,
      newTheme,
      { expires: 1000 }
    )

    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS
    const root = document.documentElement
    root.setAttribute('data-color-theme', newTheme)
    Object.entries(newTokens).forEach(([key, val]) => {
      root.style.setProperty(key, val)
    })
  }

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />
      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{ transform: 'translate(2px, -2px)' }}
          />
          <VisuallyHidden>
            View RSS feed
          </VisuallyHidden>
        </button>
        <button
          className={styles.action}
          onClick={handleToggleTheme}
        >
          {theme === 'light' ? (
            <Sun size="1.5rem" />
          ) : (
            <Moon size="1.5rem" /> 
          )}
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button>
      </div>
    </header>
  )
}

export default Header
