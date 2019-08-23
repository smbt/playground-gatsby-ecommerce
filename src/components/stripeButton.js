import React, { useEffect, useState } from "react"

const StripeButton = ({ sku_id }) => {
  const [stripe, setStripe] = useState(undefined)

  useEffect(() => {
    setStripe(window.Stripe("pk_test_fJeBDpFjDQ3ijdBrBi23i3Dk00RcsVwxMV"))
  }, [])

  return (
    <form
      onSubmit={ event => {
        console.log("pressed")
        event.preventDefault()
        stripe.redirectToCheckout({
          items: [{ sku: sku_id, quantity: 1 }],
          successUrl: "http://localhost:8000/success",
          cancelUrl: "http://localhost:8000/canceled",
        })
          .then(function(result) {
            if (result.error) {
              var displayError = document.getElementById("error-message")
              displayError.textContent = result.error.message
            }
          })
      } }
      action=""
    >
      <button type={ "submit" }>
        Credit card
      </button>
    </form>
  )
}

export default StripeButton