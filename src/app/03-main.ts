import { ProductHttpService } from './services/product-http.services';

(async ()=>{

  try {
    const productService = new ProductHttpService();
  
    const products =  await productService.getAll();
    
    const productId = products[0].id;
    await productService.update(productId, {
      price:100,
      title:"Nuevo titulo",
      description:"Nueva descripcion"
    });
  
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})();  