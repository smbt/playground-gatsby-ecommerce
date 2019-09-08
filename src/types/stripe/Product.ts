import { PackageDimensions } from 'types/stripe/PackageDimensions'

export type Product = {
    id?: string
    object?: 'product'
    active?: boolean
    attributes?: string[]
    caption?: string
    created?: number
    deactivate_on?: string[]
    description?: string
    images?: string[]
    livemode?: boolean
    metadata?: {
        [key: string]: string
    }
    name?: string
    package_dimensions?: PackageDimensions
    shippable?: boolean
    statement_descriptor?: string
    type?: 'good' | 'service'
    unit_label?: string
    updated?: number
    url?: string
}
