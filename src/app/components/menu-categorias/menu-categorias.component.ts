import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.css']
})
export class MenuCategoriasComponent implements OnInit {
  categorias: any = [];
  constructor( private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.getAllProductos();
  }
  getAllProductos() {
    this.categoriasService.getCategorias()
    .subscribe( data => {
      this.categorias = data;
      console.log(data);
    } );
  }
}
