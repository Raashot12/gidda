import React from "react"
import Head from "next/head"

type HeadTitleProps = {
  title: string
}

const HeadTitle = ({title}: HeadTitleProps) => (
  <Head>
    <title>{`Giddaa - ${title}`}</title>
  </Head>
)

export default HeadTitle
