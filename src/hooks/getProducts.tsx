import axios from "axios";

type parametersGet = {
    page: number,
    row: number,
    sort: string,//sort?: 'id' | 'name' | 'price',
    order: string//order?: 'DESC' | 'ASC'
}

const GetProducts = async ({page, row, sort, order} : parametersGet) => {
    const url = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=${row}&sortBy=${sort}&orderBy=${order}`
    
    const res = await (await axios.get(url));
    return res?.data || [];
};

export default GetProducts;