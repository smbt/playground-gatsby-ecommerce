export interface Sku {
    id: string;
    currency: 'eur';
    price: number;
    attributes: { name: string };
    localFiles: any[];
}