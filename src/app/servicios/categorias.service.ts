import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  urlProductos = './assets/data/api/categories.json';

  constructor( private httpClient: HttpClient) {
    console.log('Servicio Categorias listo para usarce!');
  }

  getCategorias() {
    return this.httpClient.get( this.urlProductos);
  }
}
