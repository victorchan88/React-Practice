import React from 'react'

export const Book = ({title="no Title Provided", author="No Author", pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} page</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!':'no!'}</p>
    </section>
  )
}
