import { Internal } from './Internal'

export interface Node {
    id: string
    parent: Node
    children: Node[]
    internal: Internal
}
