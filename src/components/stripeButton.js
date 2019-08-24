// Library
import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

const StripeButton = ({sku_id}) => {
    const [stripe, setStripe] = useState(undefined)

    useEffect(() => {
        setStripe(window.Stripe('pk_test_fJeBDpFjDQ3ijdBrBi23i3Dk00RcsVwxMV'))
    }, [])

    return (
        <Button
            variant={'outlined'}
            size={'small'}
            color={'primary'}
            onClick={event => {
                console.log('pressed')
                event.preventDefault()
                stripe.redirectToCheckout({
                    items: [{sku: sku_id, quantity: 1}],
                    successUrl: 'http://localhost:8000/paymentSuccess',
                    cancelUrl: 'http://localhost:8000/paymentCanceled',
                })
                    .then(function(result) {
                        if (result.error) {
                            const displayError = document.getElementById('error-message')
                            displayError.textContent = result.error.message
                        }
                    })
            }}
        >
            Credit card
        </Button>
    )
}

export default StripeButton