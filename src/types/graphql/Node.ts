import { Internal } from 'types/graphql/Internal'

export interface Node {
    id: string
    parent: Node
    children: Node[]
    internal: Internal
}
