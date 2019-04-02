import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  urlProductos = './assets/data/api/products.json';

  constructor( private httpClient: HttpClient) {
    console.log('Servicio Productos listo para usarce!');
  }

  getProductos() {
    return this.httpClient.get( this.urlProductos);
  }


}
