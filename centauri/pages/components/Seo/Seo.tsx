import Head from 'next/head'
import React from 'react'

type Props = {
  title?: string
}

const Seo: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title && `${title} | `}Meet</title>
    </Head>
  )
}

export default Seo
