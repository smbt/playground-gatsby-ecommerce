// Libraries
import React from 'react'
import Image from 'gatsby-image'
import {
    Grid,
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core'

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
            <Card>
                <CardHeader title={`${attributes.name} (${formattedPrice})`} />
                <CardContent>
                    <Box my={3}>
                        <Image
                            fluid={localFiles[0].childImageSharp.fluid}
                            style={{ height: 200 }}
                            imgStyle={{ objectFit: 'contain' }}
                        />
                    </Box>
                    <Box>
                        <Typography variant={'h6'} component={'h3'}>
                            Payment options:
                        </Typography>
                        <Box my={1}>
                            <StripeButton sku_id={id} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Sku
