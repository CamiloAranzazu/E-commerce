import { Component, OnInit } from '@angular/core';
import { TiendaComponent } from '../tienda/tienda.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: any = {};

  constructor( private componenTienda: TiendaComponent) { }

  ngOnInit() {
    this.ConsutarProductos();
  }

  ConsutarProductos() {
    this.productos = this.componenTienda.productosPorComprar;
  }

  EliminarProducto( idx: string) {
    // console.log(idx);
    const INDICE = this.productos.findIndex( producto => producto.id === idx);
    // console.log(INDICE);
    if (INDICE || INDICE === 0) {
      this.productos.splice(INDICE, 1);
    } else {
      console.log('Ningun producto para Eliminar');
    }
    // console.log(this.productos);
    // Sumar despues de eliminar otro productor
    this.componenTienda.sumaDeProductos = 0;
    this.componenTienda.TotalPagar();
  }


}
