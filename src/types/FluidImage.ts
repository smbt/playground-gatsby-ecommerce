export interface FluidImage {
    childImageSharp: {
        fluid: {
            aspectRation: number
            sizes: string
            src: string
            srcSet: string
            tracedSVG: string
        }
    }
}
