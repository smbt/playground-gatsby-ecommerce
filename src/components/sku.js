import React from "react"
import Image from "gatsby-image"
import StripeButton from "./stripeButton"

const Sku = ({ sku }) => {

  const { id, currency, price, attributes, localFiles } = sku
  const formattedPrice = Intl.NumberFormat("de-DE", { style: "currency", currency: currency }).format(price / 100)

  return (
    <div>
      <h2>{ attributes.name } ({ formattedPrice })</h2>
      <Image
        fluid={ localFiles[0].childImageSharp.fluid }
        style={ { width: 100 } }
      />
      <br/>
      <StripeButton
        sku_id={ id }
        name={ attributes.name }
      />
    </div>
  )
}

export default Sku