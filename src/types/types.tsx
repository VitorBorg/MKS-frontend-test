export type productCartType = {
    id: number;
    photo: string;
    name: string;
    price: string;
    quantity: number;
};

export type productType = {
    id: number;
    photo: string;
    name: string;
    price: string;
    description: string;
};

export type productAPI = {
    brand: string;
    createdAt: string;
    description: string;
    id: string;
    name: string;
    photo: string;
    price: string;
    updateAt: string;
}