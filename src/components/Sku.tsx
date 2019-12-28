// Libraries
import React from 'react'
import Image from 'gatsby-image'
import { Grid, Box } from '@material-ui/core'

// Components
import StripeButton from 'components/StripeButton'

// Types
import { Sku as SkuType } from 'types/stripe/Sku'

interface Props {
    sku: SkuType
}

const Sku = (props: Props) => {
    const { id, currency, price, attributes, localFiles } = props.sku
    const formattedPrice = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: currency,
    }).format(price / 100)

    return (
        <Grid item xs={10} sm={5} md={4}>
            <Box style={{ border: '1px solid #ddd', margin: 1 }}>
                <Box my={3}>
                    <Image
                        fluid={localFiles[0].childImageSharp.fluid}
                        style={{ height: 200 }}
                        imgStyle={{ objectFit: 'contain' }}
                    />
                </Box>
                <Box>
                    <Box
                        style={{display: 'flex', justifyContent: 'center'}}
                    >
                        <h2
                            style={{ width: '70%' }}
                        >
                            {attributes.name}
                        </h2>
                    </Box>

                    <Box my={0} style={{ textAlign: 'center', color: '#888' }}>
                        {formattedPrice}
                    </Box>
                    <Box mt={2} mb={3} style={{ textAlign: 'center' }}>
                        <StripeButton sku_id={id}/>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default Sku
