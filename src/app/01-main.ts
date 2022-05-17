import axios from 'axios';
import { Product } from './models/product.model';
(async() =>{
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const productsV2 = await getProducts();
  console.log(productsV2.map(item => `${item.title} ${item.price}`));
})();