import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Button = () => {
  const [stripe] = useState(window.Stripe("pk_test_fJeBDpFjDQ3ijdBrBi23i3Dk00RcsVwxMV"));
  console.log('Hello from Button');

  useEffect(() => {
      console.log('Hello from useEffect inside Button')
  }, []);

  return (
    <form
      onSubmit={ event => {
        console.log("pressed")
        event.preventDefault()
        stripe.redirectToCheckout({
          items: [{ sku: "sku_Ffc4kEeW6KSGq4", quantity: 1 }],

          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: "http://localhost:8000/success",
          cancelUrl: "http://localhost:8000/canceled",
        })
          .then(function(result) {
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer.
              var displayError = document.getElementById("error-message")
              displayError.textContent = result.error.message
            }
          })
      } }
      action=""
    >
      <button type={ "submit" }>
        Buy hoddie
      </button>
    </form>
  )

}

const IndexPage = () => {

  return <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to playground-gatsby-ecommerce.</p>
    <Button/>

  </Layout>

}
export default IndexPage
