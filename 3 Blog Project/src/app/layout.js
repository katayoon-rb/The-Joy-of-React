import React from 'react'
import clsx from 'clsx'

import { Work_Sans, Spline_Sans_Mono } from 'next/font/google'
import { BLOG_TITLE, LIGHT_TOKENS, DARK_TOKENS, COLOR_THEME_COOKIE_NAME } from '@/constants'
import { cookies } from 'next/headers'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RespectMotionPref from '@/components/RespectMotionPref'
import './styles.css'


const mainFont = Work_Sans({
  subsets: ['latin'], 
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family'
})
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono'
})

export const metadata = {
  title: BLOG_TITLE,
  description: 'A wonderful blog'
}

function RootLayout({ children }) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme = savedTheme?.value || 'light'

  return (
    <RespectMotionPref>
      <html lang="en" data-color-theme={theme}
        className={clsx(mainFont.variable, monoFont.variable)}
        style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header initialTheme={theme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RespectMotionPref>
   
  )
}

export default RootLayout
