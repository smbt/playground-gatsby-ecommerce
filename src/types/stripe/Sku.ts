import { Product } from './Product'
import { PackageDimensions } from 'types/stripe/PackageDimensions'
import { Node } from 'types/Node'
import { Internal } from 'types/Internal'
import { FluidObject } from 'gatsby-image'

export type Sku = {
    id: string
    parent?: Node
    children?: Node[]
    internal?: Internal
    object?: 'sku'
    active?: boolean
    attributes: {
        [key: string]: string | number | boolean
    }
    created?: number
    currency: 'eur'
    image: string
    inventory?: {
        quantity?: number
        type?: 'finite' | 'infinite' | 'bucket'
        value?: 'in_stock' | 'limited' | 'out_of_stock'
    }
    livemode?: boolean
    localFiles: { childImageSharp: { fluid: FluidObject } }[];
    metadata?: {
        [key: string]: string | number | boolean
    }
    package_dimensions?: PackageDimensions
    price: number
    product?: Product
    updated?: string
}
