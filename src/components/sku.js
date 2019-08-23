import React from "react"
import Image from "gatsby-image"
import StripeButton from "./stripeButton"

const Sku = ({ sku }) => {

  const { id, currency, price, attributes, localFiles } = sku
  const formattedPrice = Intl.NumberFormat("de-DE", { style: "currency", currency: currency }).format(price / 100)

  return (
    <div style={ {
      padding: 20,
      margin: 20,
      borderWidth: 1,
      borderColor: "rebeccapurple",
      borderStyle: "solid",
    } }>
      <h2>{ attributes.name } ({ formattedPrice })</h2>
      <div style={ {
        display: "flex",
        justifyContent: "center",
      } }>
        <Image
          fluid={ localFiles[0].childImageSharp.fluid }
          style={ { width: 100 } }
        />

      </div>
      <br/>
      <h3>Buy { attributes.name }</h3>
      Payment options:
      <StripeButton
        sku_id={ id }
      />
      <button
        onClick={ () => alert("Sorry. Paypal is not supported yet.") }
      >Paypal
      </button>
    </div>
  )
}

export default Sku