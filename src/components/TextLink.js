import React from 'react'
import Link from 'next/link'

const TextLink = ({ url, content }) => {
  return (
    <Link href={url}>
      <a className="textLink">{content}</a>
    </Link>
  )
}

export default TextLink
