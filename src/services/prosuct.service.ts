import axios from 'axios';
import { IProductsData } from './types';

export const ProductService =  {
  async getAll() {
    const {data: {products}} = await axios.get<IProductsData>('https://dummyjson.com/products');
    return products;
    
  },
  async getById(id: string) {
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
  }
};
