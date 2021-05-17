import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({ variant = false, label, icon, content }) => {
  return (
    <Link href="/">
      <a
        className={`primaryButton ${variant ? 'is-variant' : ''}`}
        aria-label={label}
      >
        <i className={icon} aria-hidden="true"></i>
        {content}
      </a>
    </Link>
  )
}

export default PrimaryButton
