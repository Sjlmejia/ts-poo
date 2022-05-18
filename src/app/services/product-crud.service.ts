import { ProductHttpService } from './product-http2.service';
import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';
import { UpdateProductDto } from '../dtos/product.dto';
export class ProductService {
  private url = "https://api.escuelajs.co/api/v1/products";
  private http = new ProductHttpService(this.url);

  async update(id:Product['id'], dto:UpdateProductDto) {
    return await this.http.update(id, dto);
  }
}