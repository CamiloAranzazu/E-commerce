import { Component, OnInit, Output, Input } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProductoI } from 'src/app/interfaces/productos';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos: any = [];

  productosPorComprar: any = [];
  sumaDeProductos = 0;
  filterProducto = '';
  filterDisponible = false;
  ordenarProducto = '';

  constructor( private productosService: ProductosService ) { }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productosService.getProductos()
    .subscribe( (data: ProductoI) => this.productos = data);
  }

  AgregarProducto( id: string,  precio: string, name: string) {
    this.productosPorComprar.push({ id, precio,  name});
    this.sumaDeProductos = 0;
    this.TotalPagar();
  }

  TotalPagar() {
    for (const items of this.productosPorComprar) {
      // console.log(items.precio);
      const quitarSigno$ =  items.precio.replace('$' , '');
      // console.log(quitarSigno$);
      const quitarComa = quitarSigno$.replace(',', '');
      const stringAInt = parseInt( quitarComa, 10 );
      this.sumaDeProductos += stringAInt;
      // console.log(this.sumaDeProductos);
    }
  }

  OrdenarPorProductos() {
    this.productos.name.sort();
    console.log(this.productos);
  }

}
