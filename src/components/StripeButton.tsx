// Libraries
import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

// Types
interface Props {
    sku_id: string;
}

const StripeButton = (props: Props) => {
    const [stripe, setStripe] = useState<any | undefined>(undefined)

    useEffect(() => {
        // @ts-ignore
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
                if(!stripe) return;
                stripe.redirectToCheckout!({
                    items: [{ sku: props.sku_id, quantity: 1 }],
                    successUrl: 'http://localhost:8000/paymentSuccess',
                    cancelUrl: 'http://localhost:8000/paymentCanceled',
                })
                    .then(function(result: any) {
                        if (result.error) {
                            alert('An error has occured.')
                        }
                    })
            }}
        >
            Buy now
        </Button>
    )
}

export default StripeButton