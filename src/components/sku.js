// Libraries
import React from 'react'
import Image from 'gatsby-image'
import {
    Grid,
    Box,
    Button,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core'

// Components
import StripeButton from './stripeButton'

const Sku = ({sku}) => {

    const {id, currency, price, attributes, localFiles} = sku
    const formattedPrice = Intl.NumberFormat(
        'de-DE',
        {style: 'currency', currency: currency},
    ).format(price / 100)

    return (
        <Grid item xs={10} sm={5} md={4}>
            <Card p={2} border={'3px solid rebeccapurple'}>
                <CardHeader title={`${attributes.name} (${formattedPrice})`}/>
                <CardContent>
                    <Box my={3}>
                        <Image
                            fluid={localFiles[0].childImageSharp.fluid}
                            style={{height: 200}}
                            imgStyle={{objectFit: 'contain'}}
                        />
                    </Box>
                    <Box>
                        <Typography variant={'h6'} component={'h3'}>Payment options:</Typography>
                        <Box my={1}>
                            <StripeButton
                                sku_id={id}
                            />
                        </Box>
                        <Box>
                            <Button
                                variant={'outlined'}
                                size={'small'}
                                color={'primary'}
                                onClick={() => alert('Sorry. Paypal is not supported yet.')}
                                borderRadius={0}
                            >Paypal
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Sku